import { FormGroup } from "react-bootstrap";
import GroupForm from "../components/HomePage/GroupForm";
import { useLoaderData } from "react-router";

export default function CreateGroupPage() {
  const data = useLoaderData();

  return <GroupForm data={data} />;
}
