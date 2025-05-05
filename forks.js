module.exports = async () => {
  const autobaseManager = (await import('@lejeunerenard/autobase-manager')).AutobaseManager;
  
  return [
    require('autobase'),
    autobaseManager, 
    require('hyperbee-cas-prev-null')
  ];
};