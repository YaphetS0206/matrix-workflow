package cicd.security

deny[msg] {

  input.docker.user == "root"

  msg := "Containers cannot run as root"

}