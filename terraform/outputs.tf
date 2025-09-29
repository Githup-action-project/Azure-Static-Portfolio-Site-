output "static_web_app_url" {
  description = "URL of the deployed Azure Static Web App"
  value       = azurerm_static_web_app.portfolio_site.default_hostname
}