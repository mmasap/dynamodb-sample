const AWS = require('aws-sdk');

AWS.config.update({
  endpoint: 'http://localhost:8000',
  region: 'us-west-2',
  accessKeyId: 'fakeMyKeyId',
  secretAccessKey: 'fakeSecretAccessKey',
});
const docClient = new AWS.DynamoDB.DocumentClient();

const params = {
  TableName: 'Post',
  Key: {
    id: 'b8b97083-4f31-4f98-acd8-f739db2b0e35',
  },
  UpdateExpression: 'set title = :t, body = :b',
  ExpressionAttributeValues: {
    ':t': 'update title',
    ':b': 'update body',
  },
};

docClient.update(params, (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});
