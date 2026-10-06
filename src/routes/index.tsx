import { createFileRoute } from "@tanstack/react-router";
import { FolderApp } from "@/components/folder/FolderApp";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return <FolderApp />;
}
