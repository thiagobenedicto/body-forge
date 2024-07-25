import { PrismaClient } from '@prisma/client'
import * as bcrypt from 'bcrypt';
const prisma = new PrismaClient()
async function main() {
  const saltRounds = 10;
  const salt = bcrypt.genSaltSync(saltRounds);
  const hash = bcrypt.hashSync(process.env.MASTER_PASSWORD, salt);

  const user = {
    name: "Thiago Benelirius",
    login: "thiago.ava@gmail.com",
    password: hash,
    isAdmin: true
  }

  await prisma.users.upsert({
    create: user,
    update: user,
    where: {
      login: user.login
    }
  })
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })