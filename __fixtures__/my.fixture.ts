import { APIRequestContext, test as base } from "@playwright/test";
import { Company } from "../types/company";

type MyFixtureType = {
  // (1)
  token: string;
  company: Company;
};

const getToken = async (request: APIRequestContext): Promise<string> => {
  const loginData = {
    username: "leonardo",
    password: "leads",
  };

  const requestAuth = await request.post(
    "https://x-clients-be.onrender.com/auth/login",
    { data: loginData }
  );
  const authBody = await requestAuth.json();
  const token = authBody["userToken"];
  return token;
};

export const test = base.extend<MyFixtureType>({
  //(2)
  company: async ({ request }, use) => {
    // (3)
    const companyInfo: Company = {
      //(4)
      id: 0,
      isActive: true,
      name: "Инженерка",
      description: "курсы для инженеров от инженеров.",
    };

    const createCompanyResponse = await request.post(
      "https://x-clients-be.onrender.com/company",
      {
        headers: { "x-client-token": await getToken(request) },
        data: { name: companyInfo.name, description: companyInfo.description },
      }
    );

    const body = await createCompanyResponse.json();
    companyInfo.id = body["id"];

    use(companyInfo); // (5)
  },
  token: async ({ request }, use) => {
    const token = await getToken(request);
    use(token);
  },
});
