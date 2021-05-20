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
};

dynamodb.deleteTable(params, (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});
