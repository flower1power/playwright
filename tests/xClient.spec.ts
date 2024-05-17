import { expect, APIRequestContext, request } from "playwright/test";
import { test } from "../__fixtures__/my.fixture";

// const url = "https://x-clients-be.onrender.com";
// const auth = "/auth/login";
// const companyPath = "/company";
// const deleteCompany = "/delete";

// // const getToken = async (request: APIRequestContext) => {
// //   const loginData = {
// //     username: "leonardo",
// //     password: "leads",
// //   };

// //   const requestAuth = await request.post(url + auth, { data: loginData });
// //   const authBody = await requestAuth.json();
// //   const token = authBody["userToken"];
// //   return token;
// // };

// // const addCompany = async (
// //   request: APIRequestContext,
// //   name: string,
// //   description: string
// // ) => {
// //   const token: string = await getToken(request);

// //   const companyData = {
// //     name,
// //     description,
// //   };

// //   const requestAddCompany = await request.post(url + company, {
// //     headers: { "x-client-token": token },
// //     data: companyData,
// //   });

// //   const bodyAddCompany = await requestAddCompany.json();
// //   const idCompany = await bodyAddCompany["id"];
// //   return { idCompany, companyData };
// // };

// // test("Создание компании", async ({ request }) => {
// //   const { idCompany, companyData } = await addCompany(
// //     request,
// //     "Имя компании",
// //     "Описание компании"
// //   );

// //   const getCompany = await request.get(`${url}${company}/${idCompany}`);
// //   const bodyGetCompany = await getCompany.json();

// //   await expect(getCompany.status()).toEqual(200);
// //   await expect(bodyGetCompany).toHaveProperty("id", idCompany);
// //   await expect(bodyGetCompany).toHaveProperty("name", companyData.name);
// //   await expect(bodyGetCompany).toHaveProperty(
// //     "description",
// //     companyData.description
// //   );
// //   await expect(bodyGetCompany).toHaveProperty("isActive", true);
// // });

// // test("Удаление уомпании по id", async ({ request }) => {
// //   const token: string = await getToken(request);
// //   const { idCompany, companyData } = await addCompany(
// //     request,
// //     "Имя компании",
// //     "Описание компании"
// //   );

// //   const dellCompany = await request.get(
// //     `${url}${company}${deleteCompany}/${idCompany}`,
// //     {
// //       headers: { "x-client-token": token },
// //     }
// //   );
// //   const bodydellCompany = await dellCompany.json();

// //   await expect(dellCompany.status()).toEqual(200);
// //   await expect(bodydellCompany).toHaveProperty("id", idCompany);
// //   await expect(bodydellCompany).toHaveProperty("name", companyData.name);
// //   await expect(bodydellCompany).toHaveProperty(
// //     "description",
// //     companyData.description
// //   );
// //   await expect(bodydellCompany).toHaveProperty("isActive", true);
// // });

// // test("Редактирование компании", async ({ request }) => {
// //   const token: string = await getToken(request);
// //   const { idCompany, companyData } = await addCompany(
// //     request,
// //     "Имя компании",
// //     "Описание компании"
// //   );

// //   const newDataCompany = {
// //     name: "Новое имя",
// //     description: "Новое описание",
// //   };

// //   const patchCompany = await request.patch(`${url}${company}/${idCompany}`, {
// //     headers: { "x-client-token": token },
// //     data: newDataCompany,
// //   });
// //   const bodyPatchCompany = await patchCompany.json();

// //   await expect(patchCompany.status()).toEqual(200);
// //   await expect(bodyPatchCompany).toHaveProperty("id", idCompany);
// //   await expect(bodyPatchCompany).toHaveProperty("name", newDataCompany.name);
// //   await expect(bodyPatchCompany).toHaveProperty(
// //     "description",
// //     newDataCompany.description
// //   );
// //   await expect(bodyPatchCompany).toHaveProperty("isActive", true);
// // });

// test("создание компании", async ({ request, company }) => {
//   const response = await request.get(`${url}${companyPath}/${company.id}`);
//   const body = await response.json();

//   expect(response.status()).toEqual(200);
// });

// test("Удаление уомпании по id", async ({ request, company, token }) => {
//   const dellCompany = await request.get(
//     `${url}${companyPath}${deleteCompany}/${company.id}`,
//     {
//       headers: { "x-client-token": token },
//     }
//   );
//   const bodydellCompany = await dellCompany.json();

//   await expect(dellCompany.status()).toEqual(200);
//   await expect(bodydellCompany).toHaveProperty("id", company.id);
//   await expect(bodydellCompany).toHaveProperty("name", company.name);
//   await expect(bodydellCompany).toHaveProperty(
//     "description",
//     company.description
//   );
//   await expect(bodydellCompany).toHaveProperty("isActive", company.isActive);
// });

// test("Редактирование компании", async ({ request, token, company }) => {
//   const newDataCompany = {
//     name: "Новое имя",
//     description: "Новое описание",
//   };

//   const patchCompany = await request.patch(
//     `${url}${companyPath}/${company.id}`,
//     {
//       headers: { "x-client-token": token },
//       data: newDataCompany,
//     }
//   );
//   const bodyPatchCompany = await patchCompany.json();

//   await expect(patchCompany.status()).toEqual(200);
//   await expect(bodyPatchCompany).toHaveProperty("id", company.id);
//   await expect(bodyPatchCompany).toHaveProperty("name", newDataCompany.name);
//   await expect(bodyPatchCompany).toHaveProperty(
//     "description",
//     newDataCompany.description
//   );
//   await expect(bodyPatchCompany).toHaveProperty("isActive", company.isActive);
// });

