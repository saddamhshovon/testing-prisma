import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  // await prisma.user.deleteMany();
  const user = await prisma.user.findUnique({
    where: {
      id: "14c44dbb-5e8e-4248-a843-dbb3888e0836",
    },
    include: {
      UserPreference: true,
    },
  });
  console.log(user);
}

main()
  .catch((e) => {
    console.error(e.message);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
