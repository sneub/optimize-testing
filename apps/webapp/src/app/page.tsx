import { prisma } from '@repo/database';

export default async function Home() {
  const test = await prisma.user.findMany();
  console.log(test);

  return (
    <>
      <div>test</div>
    </>
  );
}
