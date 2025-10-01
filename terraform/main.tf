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
  resource_group_name = azurerm_resource_group.portfolio_rg.name
  location            = azurerm_resource_group.portfolio_rg.location
  sku_tier            = "Free"
  sku_size            = "Standard"

  identity {
    type = "SystemAssigned"
  }

build_properties {
  api_location = "azure-functions"
  app_location = "."
  output_location = "dist"
  app_build_command = "npm run build"
}

  tags = {
    environment = "portfolio"
  }
}
