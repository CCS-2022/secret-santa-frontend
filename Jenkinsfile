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
       // SONARSCANNER = credentials('SonarScannerPath')
    }

    
    stages {
        stage('Git Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/CCS-2022/secret-santa-frontend.git'
            }
        }

        stage('SonarQube Analysis') {
                
            steps {
                tool name: 'SonarScanner', type: 'hudson.plugins.sonar.SonarRunnerInstallation'
                withSonarQubeEnv(credentialsId: 'SSFrontEnd-SonarQube', installationName: 'SSFrontEndSonar') {
                    //sh "$SONARSCANNER"
                    sh "./var/lib/jenkins/tools/hudson.plugins.sonar.SonarRunnerInstallation/SonarScanner/bin/sonar-scanner"
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
                           docker save -o ./images/ssfrontendCompressedImg${ENVS}-${VERSION}.tar ${DockerID}/${DevZone}:${ENVS}-${VERSION}
                        '''
                    }
                }
            }
        }

        stage('Upload to Artifactory') {
            agent {
                docker {
                    image 'releases-docker.jfrog.io/jfrog/jfrog-cli-v2:2.2.0' 
                    reuseNode true
                }
            }
            steps {
                echo "*** Uploading to Artifactory ***"
                sh 'jfrog rt upload --url http://${Artifactory}/artifactory/ --access-token ${ARTIFACTORY_ACCESS_TOKEN} ./images/${DevZone}CompressedImg${ENVS}-${VERSION}.tar ss-frontend-${ENVS}/'
            }
        }

        stage("Deploy To Container"){
            steps {
                script {
                    echo '*** Executing remote commands ***'
                    
                    try {
                        sh "ssh ${SSUser}@${SSServer} 'sudo docker stop ${DevZone}'"
                        sh "ssh ${SSUser}@${SSServer} 'sudo docker rm ${DevZone}'"
                    } catch (Exception e) {
                        echo "Container not running. Error: ${e}"
                    }
                    
                    sh "ssh ${SSUser}@${SSServer} 'sudo docker pull ${DockerID}/${DevZone}:${ENVS}-${VERSION}'"
                    sh "ssh ${SSUser}@${SSServer} 'sudo docker run -d -p ${Port}:${Port} --restart unless-stopped --name=${DevZone} ${DockerID}/${DevZone}:${ENVS}-${VERSION}'"
                }                
            }
        }
        
        stage('Remove Unused Docker Images') {
            steps {
                echo '*** Removing Unused Images From Local Server ***'
                sh 'sudo docker system prune -f'
                sh 'sudo rm ./images/*'
                echo '*** Removing Unused Images From Remote SS Server ***'
                script {
                    sh(script: """
                            
                            echo 
                            ssh ${SSUser}@${SSServer} sudo docker image prune -f
                            """, returnStdout: true)
                }
            }
        }
    }
}
    
