const rules = [
  {
    from: 'https://staging.ua/',
    to: 'https://localhost:4209/'
  }
];

(async () => {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  const url = tab.url;
  
  const newUrl = getNewUrl(url);
  
  console.log('Change url extension, rules: ', rules);
  console.log('Change url extension, url: ', url);
  console.log('Change url extension, newUrl: ', newUrl);
  
  if (!newUrl) {
    window.close();
    return;
  }
  
  chrome.tabs.update({url: newUrl});
  window.close();
})();

function getNewUrl(sourceUrl) {
  let url = sourceUrl;
  
  rules.forEach(rule => {
    url = replace(url, rule);
  })
  
  if (url === sourceUrl) {
    return '';
  }
  
  return url;
}

function replace(str, rule) {
  if (rule.from === str.slice(0, rule.from.length)) {
    return rule.to + str.slice(rule.from.length);
  }
  
  return str;
}
