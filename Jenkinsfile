pipeline {
    agent any
    environment {
        CI = true
        ARTIFACTORY_ACCESS_TOKEN = credentials('artifactory-access-token')
        SSServer = credentials('SSServerIP')
        SSUser = credentials('SSUserID')
        Port = credentials('SSPort')
        Artifactory = credentials('ArtifactoryIP') 
        DockerID = credentials('DockerHubUser')
        DevZone = credentials('DevZone') 
        VERSION = "${BUILD_NUMBER}"
        SONARSCANNER = credentials('SonarScannerPath')
    }



    stages {
        
        stage('Clean Workspace') {
            steps {
                cleanWs()
            }
        }
 
        stage('Git Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/CCS-2022/secret-santa-frontend.git'
            }
        }

        stage('SonarQube Analysis') {
                
            steps {
                withSonarQubeEnv(credentialsId: 'SSFrontEnd-SonarQube', installationName: 'SSFrontEndSonar') {
                    sh "$SONARSCANNER"
                }
            }    
        }

        stage('Create Image && Upload to DockerHub') {
            steps {
                script {
                    withCredentials([usernamePassword(credentialsId: 'dockerhub-credentials', usernameVariable: 'DOCKER_USERNAME', passwordVariable: 'DOCKER_PASSWORD')]) {
                        sh '''
                           docker build -t ${DockerID}/${DevZone}:${ENVS}-${VERSION} .
                           docker login -u $DOCKER_USERNAME -p $DOCKER_PASSWORD
                           docker push ${DockerID}/${DevZone}:${ENVS}-${VERSION}
                           
                        '''
                        //docker save -o ./ssfrontendCompressedImg${ENVS}-${VERSION}.tar ${DockerID}/${DevZone}:${ENVS}-${VERSION}
                    }
                }
            }
        }

        // stage('Upload to Artifactory') {
        //     agent {
        //         docker {
        //             image 'releases-docker.jfrog.io/jfrog/jfrog-cli-v2:2.2.0' 
        //             reuseNode true
        //         }
        //     }
        //     steps {
        //         echo "*** Uploading to Artifactory ***"
        //         sh 'jfrog rt upload --url http://${Artifactory}/artifactory/ --access-token ${ARTIFACTORY_ACCESS_TOKEN} ./${DevZone}CompressedImg${ENVS}-${VERSION}.tar ss-frontend-${ENVS}/'
        //     }
        // }

        stage("Deploy To Container"){
            steps {
                script {
                    echo '*** Executing remote commands ***'                  
                    try {
                        sh "ssh ${SSUser}@${SSServer} 'docker stop ${DevZone}'"
                    } catch (Exception e) {
                        echo "Container not running. Error: ${e}"
                    }
                    try {
                        sh "ssh ${SSUser}@${SSServer} 'docker rm ${DevZone}'"
                    } catch (Exception e) {
                        echo "Container not running. Error: ${e}"
                    }
                    sh "ssh ${SSUser}@${SSServer} 'docker pull ${DockerID}/${DevZone}:${ENVS}-${VERSION}'"
                    sh "ssh ${SSUser}@${SSServer} 'docker run -d -p ${Port}:${Port} --restart unless-stopped --name=${DevZone} ${DockerID}/${DevZone}:${ENVS}-${VERSION}'"
                }                
            }
        }
        
        stage('Remove Unused Docker Storage') {
            steps {
                echo '*** Removing Unused Images From Local Server ***'
                sh 'docker system prune -f'
                echo '*** Removing Unused Images From Remote SS Server ***'
                sh 'ssh ${SSUser}@${SSServer} docker system prune -f'
                }
        }
    }
}
    
