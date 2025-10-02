variable "location" {
  description = "Azure region for deployment"
  default     = "West Europe"
}

variable "resource_group_name" {
  description = "Name of the resource group"
  type        = string
}