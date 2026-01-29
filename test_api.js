import https from 'https';

const url = 'https://data.education.gouv.fr/api/explore/v2.1/catalog/datasets/fr-en-calendrier-scolaire/records?limit=5&refine=location%3A%22Nancy-Metz%22&refine=annee_scolaire%3A%222025-2026%22';

// Trying a simpler one if year is issue, just location
const url2 = 'https://data.education.gouv.fr/api/explore/v2.1/catalog/datasets/fr-en-calendrier-scolaire/records?limit=5&refine=location%3A%22Nancy-Metz%22';


https.get(url2, (res) => {
  let data = '';
  res.on('data', (chunk) => { data += chunk; });
  res.on('end', () => {
    try {
      const json = JSON.parse(data);
      console.log('Results:', JSON.stringify(json.results, null, 2));
    } catch (e) {
      console.error('Error parsing JSON:', e);
      console.log('Raw data:', data);
    }
  });
}).on('error', (err) => {
  console.error('Error:', err.message);
});
