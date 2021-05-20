const AWS = require('aws-sdk');
AWS.config.update({
  endpoint: 'http://localhost:8000',
  region: 'us-west-2',
  accessKeyId: 'fakeMyKeyId',
  secretAccessKey: 'fakeSecretAccessKey',
});
const dynamodb = new AWS.DynamoDB();

const params = {
  TableName: 'Post',
  AttributeDefinitions: [
    {
      AttributeName: 'id',
      AttributeType: 'S',
    },
  ],
  KeySchema: [
    {
      AttributeName: 'id',
      KeyType: 'HASH',
    },
  ],
  ProvisionedThroughput: {
    ReadCapacityUnits: 1,
    WriteCapacityUnits: 1,
  },
};

dynamodb.createTable(params, (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});
