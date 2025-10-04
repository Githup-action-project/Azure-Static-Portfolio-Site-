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



  tags = {
    environment = "portfolio"
  }
}

resource "azurerm_app_service_plan" "function_plan" {
  name                = "visitorcounter-plan"
  location            = var.location
  resource_group_name = var.resource_group_name
  kind                = "FunctionApp"
  reserved            = true

  sku {
    tier = "Dynamic"
    size = "Y1"
  }
}

resource "azurerm_function_app" "visitorcounter_func" {
  name                       = "visitorcounter-func"
  location                   = var.location
  resource_group_name        = var.resource_group_name
  app_service_plan_id        = azurerm_app_service_plan.function_plan.id
  storage_account_name       = azurerm_storage_account.storage.name
  storage_account_access_key = azurerm_storage_account.storage.primary_access_key

  version = "~4"
  os_type = "linux"





  tags = {
    environment = "production"
  }
}

resource "azurerm_storage_account" "storage" {
  name                     = "visitorstorageacct"
  resource_group_name      = var.resource_group_name
  location                 = var.location
  account_tier             = "Standard"
  account_replication_type = "LRS"
}

resource "azurerm_storage_table" "visitor_stats" {
  name = "VisitorStats"

  storage_account_name = azurerm_storage_account.storage.name

}




