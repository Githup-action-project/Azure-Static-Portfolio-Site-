output "static_web_app_url" {
  description = "URL of the deployed Azure Static Web App"
  value       = azurerm_static_web_app.portfolio_site.default_host_name
}

output "storage_account_name" {
  description = "Name of the Azure Storage Account"
  value       = azurerm_storage_account.storage.name
}