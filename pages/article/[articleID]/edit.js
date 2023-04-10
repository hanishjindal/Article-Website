import EditArticle from "@/components/ArticleListing/EditArticle";
import { useRouter } from "next/router";

function edit() {
  const router = useRouter();
  const id = Number(router.query.articleID);
  return <EditArticle id={id} />;
}

export default edit;
