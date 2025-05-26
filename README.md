# Andrew Ratz Portfolio Website

## Tools Used

- Terraform - for provisioning AWS infrastructure
- Vite - frontend framework
- React - for frontend
- NodeJS - for backend

## How to Run Locally

(I recommend using VSCode)

To host the web page
```sh
npm run dev-app
```
Then, open localhost link in your web browser of choice

The web page won't have any JSON / SQL data unless you first run one of the scrapers. You can run
```sh
npm run scrapers
```
These will save the data in JSON format to a logging folder, and then write the data to the database that the website uses

## How to Deploy

Terraform is used to deploy the website to AWS. It uses
- S3 bucket for frontend
- EC2 for backend
- RDS PostgreSQL to store the data

To host your own, you will need a secrets.tfvars file in the terraform folder
It must contain:
```sh
db_username = "desired_db_username"
db_password = "desired_db_password"
my_ip = "the_ip_of_my_compulter_so_i_can_ssh_into_the_ec2"
```

You can run the VSCode tasks that can terraform init, terraform apply, or terraform destroy the AWS infrastructure