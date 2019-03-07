# Lighthouse cloud
[![Phase](https://img.shields.io/badge/Phase-Beta-22a7f0.svg)](https://digital.canada.ca/products/) [![Maintainability](https://api.codeclimate.com/v1/badges/0184d3ed9b4111850ec7/maintainability)](https://codeclimate.com/github/cds-snc/lighthouse-cloud/maintainability)

### Purpose

This tool returns a [Lighthouse](https://developers.google.com/web/tools/lighthouse/) report in JSON format of a passed URL.

### How do I use it?

You will need to clone and deploy this cloud function yourself on Google Cloud. You will also need to set a secert in your `.env` file using the `SECRET` environmental variable. This will prevent your service from being abused.

You can deploy it with the following command:

`gcloud functions deploy scanURL --runtime nodejs8 --trigger-http --memory=1024MB`

Once deployed you can query it the following way: `YOUR_CLOUD_FUNCTION_URL/scanURL?url=http://digital.canada.ca&secret=YOUR_SECRET`


### Work flow

The cloud function takes the URL and the the secret passed as query params and runs the [Lighthouse](https://developers.google.com/web/tools/lighthouse/) tool on the URL. It returns the results in a JSON format.

### Implementation

The tool is built as a Google Cloud function. Any merges to master are automatically deployed after testing passes using Google's Cloud build service (check cloudbuild.yaml for more information). 

### Questions?

Please contact us through any of the multiple ways listed on our [website](https://digital.canada.ca/).
