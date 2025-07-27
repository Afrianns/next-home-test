import {
  CategoryType,
  columns,
} from "@/components/table/category-page/category-type";
import { DataTable } from "@/components/table/data-table";

async function getData(): Promise<CategoryType[]> {
  // Fetch data from your API here.
  let articles = {
    data: [
      {
        id: "",
        userId: "d80e40ed-9236-49d8-b4b8-d6f1ffaae868",
        name: "Management",
        createdAt: "2025-05-10T18:38:02.392Z",
        updatedAt: "2025-05-10T18:38:02.392Z",
      },
      {
        id: "4e73f15c-4625-4c9c-8d08-c96af257b674",
        userId: "6c3d3fdb-d129-4c53-8423-5a2ac8089f87",
        name: "Olahraga",
        createdAt: "2025-07-21T04:35:31.558Z",
        updatedAt: "2025-07-21T04:35:31.558Z",
      },
      {
        id: "6bf09c76-de8b-4991-bcae-b49915c5db56",
        userId: "96c0157e-a321-4bb4-b1aa-12c791787f71",
        name: "Tutorial",
        createdAt: "2025-06-11T15:36:39.040Z",
        updatedAt: "2025-06-11T15:36:39.040Z",
      },
      {
        id: "6cc5a79a-8dcd-4642-af3c-6ca486c1aafe",
        userId: "b433fbae-80a5-425e-a13f-3d7130ec2796",
        name: "FrontEnd",
        createdAt: "2025-06-21T22:52:30.851Z",
        updatedAt: "2025-06-21T22:58:52.771Z",
      },
      {
        id: "70da37fe-e81a-4c1f-a350-e0d17f2e38c9",
        userId: "9b598286-14d6-4ac8-ab8d-315219cfa5fe",
        name: "Test",
        createdAt: "2025-07-03T05:01:23.687Z",
        updatedAt: "2025-07-03T05:01:23.687Z",
      },
      {
        id: "be986249-517b-494d-9d00-7a3547c35da9",
        userId: "2cfe5c50-84f8-4e79-8fec-bcfa0139fac0",
        name: "apple",
        createdAt: "2025-07-05T13:13:55.537Z",
        updatedAt: "2025-07-05T13:13:55.537Z",
      },
      {
        id: "c5dafec2-50fb-401c-90f2-5eff468183b4",
        userId: "96c0157e-a321-4bb4-b1aa-12c791787f71",
        name: "Entertaiment",
        createdAt: "2025-05-30T07:13:24.580Z",
        updatedAt: "2025-05-30T07:13:36.810Z",
      },
      {
        id: "cfdb32fc-259f-4d00-9a56-703903673848",
        userId: "e9cf7b53-63fe-4999-969f-7340909321d7",
        name: "technology",
        createdAt: "2025-06-14T08:42:13.483Z",
        updatedAt: "2025-06-14T08:42:13.483Z",
      },
      {
        id: "d3e65276-4420-4d7c-aae6-f540b822969a",
        userId: "74d9063e-36fa-4e94-b0e8-87ae2a6c77c7",
        name: "Sports",
        createdAt: "2025-06-14T20:32:13.536Z",
        updatedAt: "2025-06-14T20:32:13.536Z",
      },
      {
        id: "dd5aa946-fdbc-4e0d-8207-bd732e12c6f1",
        userId: "7e4daefc-ecc3-43ce-8275-41fbe2f8a8f6",
        name: "ELEKTRONIK",
        createdAt: "2025-06-17T07:08:00.717Z",
        updatedAt: "2025-06-17T07:08:00.717Z",
      },
    ],
    totalData: 26,
    currentPage: 1,
    totalPages: 3,
  };
  return articles.data;
}

export default async function TablePage() {
  const data = await getData();

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} type="name" />
    </div>
  );
}
