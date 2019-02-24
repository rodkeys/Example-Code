const archiver = require('archiver'),
    fs = require("fs"),
    aws = require('aws-sdk');

aws.config.update({
    // Your SECRET ACCESS KEY from AWS should go here,
    // Never share it!
    // Setup Env Variable, e.g: process.env.SECRET_ACCESS_KEY
    secretAccessKey: "",
    // Not working key, Your ACCESS KEY ID from AWS should go here,
    // Never share it!
    // Setup Env Variable, e.g: process.env.ACCESS_KEY_ID
    accessKeyId: "",
    region: 'us-west-2' // region of your bucket,
});

const s3 = new aws.S3();

/**
 * @param {String} source
 * @param {String} out
 * @returns {Promise}
 */
function zipDirectory(source, out) {
    const archive = archiver('zip', { zlib: { level: 9 } });

    const stream = fs.createWriteStream(out);

    // return new Promise((resolve, reject) => {
    archive
        .directory(source, false)
        .on('error', err => console.log(err))
        .pipe(stream);

    stream.on('close', () => {
        //configuring parameters
        var params = {
            Bucket: 'myBucket',
            Body: fs.createReadStream("./testZip.zip"),
            Key: "folder/" + Date.now() + "_testZip.zip"
        };

        s3.upload(params, function(err, data) {
            //handle error
            if (err) {
                console.log("Error", err);
            }

            //success
            if (data) {
                console.log("Uploaded in:", data.Location);
            }
        });

    });
    archive.finalize();
    // });
}

zipDirectory("./testFolder", "testZip.zip")