const contacts = require("./contacts");
const { Command } = require("commander");
const program = new Command();

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      const allContscts = await contacts.listContacts();
      console.log(allContscts);
      break;

    case "get":
      const oneContact = await contacts.getContactById(id);
      console.log(oneContact);
      break;

    case "add":
      const newContact = await contacts.addContact({ name, email, phone });
      console.log(newContact);
      break;

    case "remove":
      const removeContact = await contacts.removeContactsById(id);
      console.log(removeContact);
      break;

    case "updateById":
      const updateContact = await contacts.updateById(id, {
        name,
        email,
        phone,
      });
      console.log(updateContact);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");

      break;
  }
};

program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse();
const option = program.opts();
invokeAction(option);





// Парсинга аргументів командного рядка за допомогою "yargs"

// const contacts = require("./contacts");
// const yargs = require("yargs");
// const { hideBin } = require("yargs/helpers");

// const invokeAction = async ({ action, id, name, email, phone }) => {
//   switch (action) {
//     case "list":
//       const allContscts = await contacts.listContacts();
//       console.log(allContscts);
//       break;

//     case "get":
//       const oneContact = await contacts.getContactById(id);
//       console.log(oneContact);
//       break;

//     case "add":
//       const newContact = await contacts.addContact({ name, email, phone });
//       console.log(newContact);
//       break;

//     case "remove":
//       const removeContact = await contacts.removeContactsById(id);
//       console.log(removeContact);
//       break;

//     case "updateById":
//       const updateContact = await contacts.updateById(id, {
//         name,
//         email,
//         phone,
//       });
//       console.log(updateContact);
//       break;

//     default:
//       console.warn("\x1B[31m Unknown action type!");

//       break;
//   }
// };

// const arr = hideBin(process.argv);
// const { argv } = yargs(arr);
// console.log(argv);
// invokeAction(argv);
