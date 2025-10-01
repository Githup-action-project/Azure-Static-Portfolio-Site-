terraform {
  required_providers {
    azurerm = {
      source  = "hashicorp/azurerm"
      version = "~> 3.0"
    }
  }
}

provider "azurerm" {
  features {}
}

resource "azurerm_resource_group" "portfolio_rg" {
  name     = "portfolio-resource-group"
  location = var.location
}

resource "azurerm_static_web_app" "portfolio_site" {
  name                = "portfolio-static-site"
  resource_group_name = "abdirahman.ibrahim_capgemini.com"
  location            = "West Europe"
  sku                 = "Free"

  identity {
    type = "SystemAssigned"
  }

  tags = {
    environment = "portfolio"
  }
}
