// const sdk = require("node-appwrite");
// const { databases } = require("./appwrite");

// const todoDatabaseId = process.env.APPWRITE_DATABASE_ID;
// const todoCollectionId = process.env.APPWRITE_COLLECTION_ID;

// exports.prepareDatabase = async () => {
//   //   todoDatabase = await databases.create(sdk.ID.unique(), "TodosDB");

//   //   todoCollection = await databases.createCollection(
//   //     todoDatabaseId,
//   //     sdk.ID.unique(),
//   //     "Todos"
//   //   );

//   await databases.createStringAttribute(
//     todoDatabaseId,
//     todoCollectionId,
//     "title",
//     255,
//     true
//   );

//   await databases.createStringAttribute(
//     todoDatabaseId,
//     todoCollectionId,
//     "description",
//     255,
//     false,
//     "This is a test description"
//   );

//   await databases.createBooleanAttribute(
//     todoDatabaseId,
//     todoCollectionId,
//     "isComplete",
//     true
//   );
// };
