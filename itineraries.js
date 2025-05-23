const itineraries = [
  {
    id: 'greve',
    title: 'Greve',
    description: 'Discover Chianti’s heart from Il Cortile Pratolino',
    overview: {
      start: 'Il Cortile Pratolino, near Montegonzi (9:30 AM)',
      destinations: 'Greve in Chianti, Montefioralle, Lamole, Panzano, Castellina in Chianti, Montegonzi',
      end: 'Montegonzi (by 5:00 PM)',
      totalDrivingDistance: '~60 km',
      totalDrivingTime: '~1 hour 45 minutes',
      totalTime: '7 hours 30 minutes (including activities and lunch)'
    },
    detailed: [
      {
        time: '9:30 AM – Depart to Greve in Chianti',
        details: '<strong>Drive:</strong> 15 km, ~20 minutes. From Il Cortile Pratolino, head south on local roads toward SP94. Turn right onto SP94, then left onto SR222 (Via Chiantigiana) toward Greve in Chianti. Follow SR222 for ~15 km. Park near Piazza Matteotti (try via Cesare Battisti for the large parking lot on via Rosa Libri).<br><strong>Scenic Notes:</strong> The drive along SR222 offers rolling hills, vineyards, and cypress trees. Look for photo opportunities at vineyard viewpoints.'
      },
      {
        time: '9:50 AM – 10:50 AM: Greve in Chianti (1 hour)',
        details: '<strong>Activities:</strong> Stroll Piazza Matteotti, the arcaded main square, with shops selling local wines, olive oil, and crafts. Admire the statue of explorer Giovanni da Verrazzano. Visit Antica Macelleria Falorni, a historic butcher shop since 1729, for a quick tasting of Tuscan cold cuts or to buy specialties. Pop into an enoteca like Enoteca Falorni for a quick Chianti Classico tasting (5-10 minutes, no reservation needed).<br><strong>Tips:</strong> Greve is Chianti’s commercial hub, so it’s lively but parking is straightforward outside the ZTL (Limited Traffic Zone). Avoid driving into the historic center.'
      },
      {
        time: '10:50 AM – Drive to Montefioralle',
        details: '<strong>Drive:</strong> 2 km, ~5 minutes. From Piazza Matteotti, take Via Roma west, following signs for Montefioralle. The road climbs uphill for ~2 km to the village. Park just outside the walls at Piazza Santo Stefano.<br><strong>Scenic Notes:</strong> The short, winding road offers views of vineyards and the Greve valley.'
      },
      {
        time: '11:00 AM – 11:45 AM: Montefioralle (45 minutes)',
        details: '<strong>Activities:</strong> Wander the narrow, cobbled streets of this tiny, fortified borgo, one of Italy’s most beautiful villages. See the Church of Santo Stefano and the house of Amerigo Vespucci (marked by a wasp coat of arms). Stop at Montefioralle Winery for a quick Chianti Classico or Vin Santo tasting (10 minutes, call ahead if possible: +39 055 853 189). Capture panoramic views of the surrounding vineyards and stone houses adorned with flowers.<br><strong>Tips:</strong> Montefioralle is compact, so 45 minutes is enough to explore. Avoid parking inside the village to save time.'
      },
      {
        time: '11:45 AM – Drive to Lamole',
        details: '<strong>Drive:</strong> 8 km, ~15 minutes. Return to Greve via the same road, then from Greve, follow SR222 south for ~1 km. Turn left onto Via Lamole (SP119), a narrow, winding road, and continue for ~7 km to Lamole. Park near Ristoro di Lamole (Via di Lamole, 6).<br><strong>Scenic Notes:</strong> The road to Lamole is steep and curvy but stunning, with breathtaking views of Chianti Classico vineyards. Drive cautiously due to tight turns.'
      },
      {
        time: '12:15 PM – 1:45 PM: Lunch at Ristoro di Lamole (1 hour 30 minutes)',
        details: '<strong>Activity:</strong> Enjoy lunch at Ristoro di Lamole, a trattoria with a panoramic terrace overlooking vineyards. Try seasonal pastas like tagliolini with truffles or Florentine steak. Pair with a glass of Chianti Classico. Reservations are recommended (+39 055 854 7050).<br><strong>Tips:</strong> The terrace is a highlight, so request an outdoor seat if weather permits. Keep lunch to 90 minutes to stay on schedule.'
      },
      {
        time: '1:45 PM – Drive to Panzano',
        details: '<strong>Drive:</strong> 6 km, ~10 minutes. Return down Via Lamole to SR222, turn left, and head south for ~6 km to Panzano. Park near the main square or Panzano Alto (upper village).<br><strong>Scenic Notes:</strong> The SR222 stretch is very panoramic, with photo stops possible at vineyard pullouts.'
      },
      {
        time: '2:00 PM – 3:00 PM: Panzano (1 hour)',
        details: '<strong>Activities:</strong> Visit Antica Macelleria Cecchini, Dario Cecchini’s famous butcher shop, for a quick tasting of Tuscan meats or to see his Dante-quoting showmanship (no reservation needed for the shop). Walk to Panzano Alto to see the Castle of Panzano’s remains and the Church of Santa Maria (rebuilt in the 19th century). Enjoy views from the small square. If time allows, take a 2-minute drive south to Pieve di San Leolino, a 10th-century Romanesque church with sacred artworks (5-minute visit).<br><strong>Tips:</strong> Panzano is small but charming. Focus on the butcher shop and a quick walk to stay on schedule.'
      },
      {
        time: '3:00 PM – Drive to Castellina in Chianti',
        details: '<strong>Drive:</strong> 15 km, ~20 minutes. Continue south on SR222 for ~15 km to Castellina in Chianti. Park near the main square or along Via IV Novembre.<br><strong>Scenic Notes:</strong> This stretch of SR222 has tight curves but offers panoramic views of hills and vineyards.'
      },
      {
        time: '3:20 PM – 4:20 PM: Castellina in Chianti (1 hour)',
        details: '<strong>Activities:</strong> Walk Via delle Volte, a romantic, medieval stone-vaulted passageway with shops and enotecas (10-minute stroll with valley views). Visit the main square’s Rocca Fortress, now home to the Archaeological Museum of Chianti Senese, and climb the tower for panoramic views (15 minutes, €5 entry). Grab a quick gelato at Gelateria Castellina with unique flavors like ricotta and fig or cantuccini and Vin Santo (5 minutes).<br><strong>Tips:</strong> Castellina is compact, so prioritize Via delle Volte and the fortress. Avoid lingering in shops to stay on time.'
      },
      {
        time: '4:20 PM – Drive to Montegonzi',
        details: '<strong>Drive:</strong> 14 km, ~20 minutes. From Castellina, take SR222 north for ~5 km, then turn right onto SP99 toward Montegonzi. Follow SP99 for ~4 km to Montegonzi, then local roads to Il Cortile Pratolino.<br><strong>Scenic Notes:</strong> The route back passes through the Greve valley, with woodland paths and vineyard views.'
      },
      {
        time: '4:40 PM – Arrive in Montegonzi (by 5:00 PM)',
        details: '<strong>Activity:</strong> Relax at Il Cortile Pratolino. If time permits, take a short walk in Montegonzi, a medieval settlement with historic stone buildings and valley views.<br><strong>Tips:</strong> Montegonzi is small, so no major activities are planned to ensure the itinerary ends by 5:00 PM.'
      }
    ],
    timeBreakdown: [
      'Driving: 1 hour 45 minutes',
      'Greve in Chianti: 1 hour',
      'Montefioralle: 45 minutes',
      'Lamole (Lunch): 1 hour 30 minutes',
      'Panzano: 1 hour',
      'Castellina in Chianti: 1 hour',
      'Buffer: 30 minutes (for traffic, photo stops, or delays)',
      '<strong>Total:</strong> 7 hours 30 minutes (9:30 AM – 5:00 PM)'
    ],
    tips: [
      '<strong>Driving:</strong> The SR222 and side roads are curvy; drive cautiously, especially on the narrow road to Lamole. A compact car is ideal.',
      '<strong>Parking:</strong> Most towns have parking outside the ZTL zones. Greve and Castellina have larger lots; Montefioralle and Panzano have limited spaces.',
      '<strong>What to Bring:</strong> Comfortable shoes for walking, a camera for scenic views, and cash for small shops or parking (some lots are coin-operated).',
      '<strong>Reservations:</strong> Book Ristoro di Lamole in advance (+39 055 854 7050). For wine tastings, Montefioralle Winery may accept walk-ins, but calling ahead is safer (+39 055 853 189).',
      '<strong>Seasonal Notes:</strong> In May, expect pleasant weather and blooming landscapes. Check for festivals like I Vini del Castello in Montefioralle (3rd weekend of May), which may affect parking.',
      '<strong>Fuel:</strong> Fill up in Greve (Coop supermarket area on SR222 has gas stations) if needed.'
    ]
  },
  {
    id: 'panzano',
    title: 'Chianti Classico Loop',
    description: 'A scenic loop through the heart of Chianti’s wine country',
    overview: {
      start: 'Il Cortile Pratolino, near Cavriglia, Italy (9:30 AM)',
      destinations: 'Gaiole in Chianti, Castello di Brolio, Radda in Chianti, Cavriglia',
      end: 'Return to Il Cortile Pratolino (by 4:30 PM)',
      totalDrivingDistance: '~60 km (round trip)',
      totalDrivingTime: '~1 hour 30 minutes (excluding stops)',
      totalTimeForStops: '~5 hours 30 minutes (including winery, lunch, and exploration)'
    },
    detailed: [
      {
        time: '9:30 AM – Depart Il Cortile Pratolino for Gaiole in Chianti',
        details: '<strong>Drive:</strong> ~15 km, ~20 minutes via SP1 and SR429 toward Gaiole in Chianti. This short drive winds through Chianti’s rolling hills, dotted with vineyards and olive groves.<br><strong>Notes:</strong> Roads are narrow but paved; watch for cyclists. Park in the free lot near Piazza Ricasoli or along Via Spaltenna.'
      },
      {
        time: '9:50 AM – Explore Gaiole in Chianti (1 hour)',
        details: '<strong>Activities:</strong> Stroll Piazza Ricasoli, Gaiole’s central square, lined with cafes and shops. Visit the Chiesa di San Sigismondo, a simple 13th-century church with a rose window and serene interior (free, ~10 minutes). Browse Enoteca Tana de L’Upupa (Via Roma 24) for local Chianti Classico wines and olive oils, ideal for quick souvenirs. Enjoy a coffee at Bar La Piazza (Piazza Ricasoli 48) while soaking in the small-town vibe.<br><strong>Why Visit:</strong> Gaiole is a quiet hub of Chianti Classico wine production, less touristy than Radda, with authentic Tuscan charm.<br><strong>Notes:</strong> Keep the visit concise to stay on schedule. Gaiole is compact, so 1 hour covers the main sights.'
      },
      {
        time: '10:50 AM – Drive to Castello di Brolio',
        details: '<strong>Drive:</strong> ~5 km, ~10 minutes via SR429 and SP484 to Castello di Brolio, a historic winery and castle near Gaiole.<br><strong>Notes:</strong> Follow signs for “Castello di Brolio”; park in the winery’s lot (€3).'
      },
      {
        time: '11:00 AM – Winery Visit at Castello di Brolio (1 hour 15 minutes)',
        details: '<strong>Activities:</strong> Wine Tasting (~€25–35/person, 45 minutes): Book a tasting at Ricasoli 1141, the oldest winery in Italy, founded by the Ricasoli family. Sample Chianti Classico DOCG and Gran Selezione wines in the modern tasting room with vineyard views. The “Introductory Tasting” (3 wines) is ideal for time constraints. Reservations are recommended (+39 0577 7301 or barone-ricasoli.com). Quick Castle Tour (~30 minutes): Explore the castle gardens and ramparts (€5–10, guided tour optional). The 11th-century fortress, rebuilt in neo-Gothic style, offers panoramic Chianti views. Skip the full museum to save time.<br><strong>Why Visit:</strong> Castello di Brolio is a Chianti icon, blending wine, history, and stunning landscapes. Reviews praise the knowledgeable staff and high-quality wines.<br><strong>Notes:</strong> Without a reservation, tastings may be available at the enoteca, but tours could be limited. Call ahead to confirm.'
      },
      {
        time: '12:15 PM – Drive to Radda in Chianti',
        details: '<strong>Drive:</strong> ~12 km, ~15 minutes via SR429 and SP2bis. This scenic route climbs through vineyards, offering glimpses of Radda’s hilltop silhouette.<br><strong>Notes:</strong> Park in the free lot below Radda’s walls (Via Roma) or near Piazza IV Novembre (~€1.50/hour).'
      },
      {
        time: '12:30 PM – Lunch and Explore Radda in Chianti (2 hours)',
        details: '<strong>Lunch (1 hour, 12:30 PM–1:30 PM):</strong> Restaurant Recommendation: La Botte di Bacco (Viale XX Settembre 23, +39 0577 738033, reservations advised). This highly rated trattoria serves Tuscan classics like pappardelle al cinghiale (wild boar pasta) and bistecca alla fiorentina (€15–30/person). Reviews highlight fresh ingredients and a cozy terrace with vineyard views. For a quicker option, try Casa Porciatti Enoteca (Piazza IV Novembre 2) for a charcuterie board and wine (~€10–15/person).<br><strong>Activities (1 hour, 1:30 PM–2:30 PM):</strong> Explore Radda’s medieval center, starting at Piazza Ferrucci. Visit the Palazzo del Podestà, a 15th-century town hall with historic crests (exterior only, free). Walk to the Chiesa di San Niccolò, a Romanesque church with a wooden crucifix from the 1400s (free, ~10 minutes). Stroll the fortified walls along Via Roma for views of the Pesa Valley. Browse Chianti Cashmere (Via Roma 20) for local goat cashmere products or Enoteca Il Vino del Castello for wine souvenirs.<br><strong>Why Visit:</strong> Radda is the heart of Chianti Classico, with charming streets, historic sites, and vibrant wine culture. Its hilltop setting is perfect for photos.<br><strong>Notes:</strong> Lunch reservations ensure faster service. Radda is walkable; 1 hour post-lunch covers key sights.'
      },
      {
        time: '2:30 PM – Drive to Cavriglia',
        details: '<strong>Drive:</strong> ~15 km, ~20 minutes via SP408 and SR69. This route passes through rolling hills and the village of Montegonzi, returning toward Cavriglia’s center.<br><strong>Notes:</strong> Park in Piazza Berlinguer or near the town hall (free).'
      },
      {
        time: '2:50 PM – Brief Stop in Cavriglia (45 minutes)',
        details: '<strong>Activities:</strong> Visit the Museo della Miniera (Mining Museum, Piazza Berlinguer, €3, ~20 minutes), showcasing Cavriglia’s lignite mining history with artifacts and photos. It’s small but insightful for local context. Walk to Parco Naturale di Cavriglia (5-minute drive, free), a green space with trails and animal habitats (deer, donkeys). Take a short stroll for views of the Arno Valley (~20 minutes).<br><strong>Why Visit:</strong> Cavriglia, your home base, offers a low-key stop to appreciate local history and nature, rounding out the day without rushing.<br><strong>Notes:</strong> Skip the museum if time is tight, focusing on the park for a relaxing end. The park closes at 6:00 PM, so you’re well within hours.'
      },
      {
        time: '3:35 PM – Drive Back to Il Cortile Pratolino',
        details: '<strong>Drive:</strong> ~5 km, ~10 minutes via local roads (SP1 or Via della Repubblica). A quick return to the villa through familiar countryside.<br><strong>Notes:</strong> Roads are straightforward; no refueling needed for this short trip.'
      },
      {
        time: '3:45 PM – Arrive Back at Il Cortile Pratolino',
        details: '<strong>Activity:</strong> Relax at the villa’s infinity pool or sip a glass of Chianti Classico, reflecting on the day’s wine and Tuscan charm.<br><strong>Buffer:</strong> ~45 minutes early arrival allows flexibility for delays or extra photo stops.'
      }
    ],
    timeBreakdown: [
      'Driving: ~1 hour 30 minutes (20 min to Gaiole, 10 min to Brolio, 15 min to Radda, 20 min to Cavriglia, 10 min return)',
      'Gaiole in Chianti: 1 hour',
      'Castello di Brolio: 1 hour 15 minutes',
      'Radda in Chianti (Lunch + Exploration): 2 hours',
      'Cavriglia: 45 minutes',
      'Buffer: ~30–45 minutes (for parking, traffic, or extended winery time)',
      '<strong>Total:</strong> ~7 hours (9:30 AM – 4:30 PM)'
    ],
    tips: [
      '<strong>Roads:</strong> SR429, SP408, and SP2bis are scenic, two-lane roads with vineyards and curves. No tolls are needed. Watch for cyclists and tractors.',
      '<strong>Costs (per person):</strong> Wine tasting: €25–35 (Castello di Brolio). Lunch: €15–30 (La Botte di Bacco) or €10–15 (Casa Porciatti). Parking: Free (Gaiole, Cavriglia) or ~€1.50–3 (Radda, Brolio). Museum/Castle: €3–10 (Mining Museum, Brolio gardens). Fuel: ~€7–10 for 60 km (at ~€1.70/L).',
      '<strong>Reservations:</strong> Book Castello di Brolio tasting (+39 0577 7301, barone-ricasoli.com). Reserve lunch at La Botte di Bacco (+39 0577 738033) to avoid waits.',
      '<strong>What to Bring:</strong> Euros for tastings/lunch, a designated driver (Italian alcohol limit: 0.5 g/L), a camera for vineyard views, and comfortable shoes for Radda’s cobblestones.',
      '<strong>Parking:</strong> Use free lots in Gaiole (Piazza Ricasoli) and Cavriglia (Piazza Berlinguer); paid lots in Radda (Via Roma) and Brolio are inexpensive. Avoid ZTL zones in Radda.',
      '<strong>Time Management:</strong> The itinerary is comfortable, with ~45 minutes buffer. If delayed, shorten Cavriglia to 30 minutes (skip museum) or Radda exploration to 45 minutes.',
      '<strong>Alternative Recommendations:</strong> Winery: If Brolio is booked, try Badia a Coltibuono (near Gaiole, +39 0577 74481, €20–30 tasting, organic Chianti Classico). Restaurant: In Gaiole, Osteria al Ponte (Via Casabianca 25, €15–25) offers rustic Tuscan fare if you prefer lunch there. Activity: In Radda, visit the Chianti Classico Consortium (Via Pianigiani 9) for a quick wine education (~15 minutes, free).',
      '<strong>Critical Notes:</strong> Castello di Brolio’s tastings are a highlight; prioritize booking to secure a spot. Radda’s lunch scene is vibrant; La Botte di Bacco is top-rated for quality and ambiance. Cavriglia’s stop is brief but ties the day to your local area; the park is ideal for families or nature lovers. Verify hours: Brolio (10:00 AM–6:00 PM), La Botte di Bacco (12:00 PM–2:30 PM), Mining Museum (check locally, often 10:00 AM–5:00 PM). The establishment narrative on Chianti’s wine and charm is reliable, but confirm reservations and prices directly.'
    ]
  },
  {
    id: 'florence',
    title: 'Florence Day Trip',
    description: 'A cultural escape to Florence’s Renaissance heart',
    overview: {
      start: 'Il Cortile Pratolino, near Cavriglia, Italy (9:30 AM)',
      destinations: 'Florence',
      end: 'Return to Il Cortile Pratolino (by 7:30 PM)',
      totalDrivingDistance: '~90 km (round trip)',
      totalDrivingTime: '~1 hour 40 minutes (excluding stops)',
      totalTimeForStops: '~8 hours 20 minutes (including sightseeing, lunch, and dinner)'
    },
    detailed: [
      {
        time: '9:30 AM – Depart Il Cortile Pratolino for Florence',
        details: '<strong>Drive:</strong> ~45 km, ~50 minutes via SR69 to the A1 north, exiting at Firenze Impruneta, then following signs to Florence’s city center. This route is the fastest, avoiding slower backroads to maximize city time.<br><strong>Notes:</strong> Expect a toll on the A1 (~€3–4 one way). Park at Parcheggio Parterre (Piazza della Libertà, €2/hour, covered) or Garage La Stazione (Via Alamanni, €2.50/hour), both outside the ZTL (restricted traffic zone) to avoid fines. Parterre is closer to the city center. Arrive by 10:20 AM to secure a spot, as Florence parking fills up quickly.'
      },
      {
        time: '10:20 AM – Morning Exploration in Florence (2 hours 30 minutes)',
        details: '<strong>Activities (10:20 AM–12:50 PM):</strong> Duomo and Piazza del Duomo (45 minutes): Start at Florence’s iconic Cattedrale di Santa Maria del Fiore (free entry to the cathedral, ~15 minutes). Admire the Brunelleschi Dome and Giotto’s Campanile (climbing requires tickets, €20, ~1 hour, so skip to save time). Explore the Baptistery of San Giovanni (€5, ~15 minutes) for its bronze doors and mosaics. Take photos in the bustling piazza. Piazza della Signoria and Palazzo Vecchio (45 minutes): Walk ~5 minutes via Via dei Calzaiuoli to this historic square. View the Loggia dei Lanzi’s sculptures (free) and the Palazzo Vecchio’s exterior (entry €12.50, skip interior for time). Snap a photo with the replica of Michelangelo’s David. Ponte Vecchio (30 minutes): Stroll ~5 minutes to Florence’s iconic bridge over the Arno River. Browse jewelry shops and enjoy river views. Cross to the Oltrarno district for a quieter vibe, returning via Ponte Santa Trinita for photos.<br><strong>Why Visit:</strong> These landmarks capture Florence’s Renaissance heart, showcasing art, architecture, and history in a compact area.<br><strong>Notes:</strong> Wear comfortable shoes for cobblestones. Avoid peak crowds by starting early. Book Duomo-related tickets (e.g., Baptistery) online at duomo.firenze.it if you want to climb the dome or campanile, but this itinerary prioritizes free or quick sights for time.'
      },
      {
        time: '12:50 PM – Lunch in Florence (1 hour)',
        details: '<strong>Restaurant Recommendation:</strong> Trattoria Mario (Via Rosina 2r, near Mercato Centrale, +39 055 218550, no reservations). This family-run gem, open since 1953, serves authentic Tuscan dishes like ribollita (vegetable stew) or bistecca alla fiorentina (€10–20/person). Reviews praise the communal tables and fresh, no-frills food. Arrive by 12:45 PM to avoid long lines, as it’s popular with locals.<br><strong>Alternative:</strong> For a quicker option, grab a panino at All’Antico Vinaio (Via dei Neri 65r, ~€6–8), famous for schiacciata sandwiches. Eat on the go to save ~20 minutes.<br><strong>Notes:</strong> Trattoria Mario is cash-only and closes at 3:30 PM.'
      },
      {
        time: '1:50 PM – Afternoon Exploration in Florence (2 hours 30 minutes)',
        details: '<strong>Activities (1:50 PM–4:20 PM):</strong> Galleria dell’Accademia (1 hour): Walk ~10 minutes to see Michelangelo’s David (€12, book online at accademia.org to skip lines). This compact museum focuses on the 5.17-meter statue and other Renaissance works. Reviews highlight the awe-inspiring detail of David. Allow ~45 minutes inside, plus 15 minutes for entry/security. San Lorenzo and Mercato Centrale (45 minutes): Walk ~5 minutes to the Basilica di San Lorenzo (exterior only, €7 entry optional) and explore the adjacent Mercato Centrale. Browse the ground floor for local produce or leather goods, or grab a coffee upstairs at the food hall (free entry, ~€3–5 for snacks). Santa Croce or Oltrarno Stroll (45 minutes): Walk ~15 minutes to Piazza Santa Croce to see the Basilica di Santa Croce’s exterior (tombs of Michelangelo, Galileo; €8, skip interior for time). Alternatively, return to Oltrarno for artisan shops along Via Santo Spirito or views from Piazzale Michelangelo (15-minute walk, steep). Santa Croce is recommended for its proximity and history.<br><strong>Why Visit:</strong> The Accademia offers a bucket-list art experience, while San Lorenzo and Santa Croce add Florence’s market and historical depth. Oltrarno is a quieter alternative for a local vibe.<br><strong>Notes:</strong> Pre-book Accademia tickets to avoid queues. Santa Croce is walkable; Piazzale Michelangelo requires more time or a taxi (€10). Stay mindful of time to fit dinner later.'
      },
      {
        time: '4:20 PM – Early Dinner in Florence (1 hour 30 minutes)',
        details: '<strong>Restaurant Recommendation:</strong> Osteria Vini e Vecchi Sapori (Via dei Magazzini 3r, near Piazza della Signoria, +39 055 293045, reservations advised). This cozy spot serves refined Tuscan fare like pappardelle al cinghiale (wild boar pasta) or peposo (peppery beef stew) (€15–25/person). Reviews praise the intimate setting and wine list. Book for 4:30 PM to ensure quick service.<br><strong>Alternative:</strong> For a faster meal, try I’ Girone De’ Ghiotti (Via dei Cimatori 23r, ~€8–12) for gourmet sandwiches or small plates, ideal for a 45-minute stop.<br><strong>Notes:</strong> Osteria Vini e Vecchi Sapori is cash-preferred; call ahead to reserve. An early dinner avoids Florence’s evening crowds and aligns with the return schedule.'
      },
      {
        time: '5:50 PM – Drive Back to Il Cortile Pratolino',
        details: '<strong>Drive:</strong> ~45 km, ~50 minutes via A1 south (exit Firenze Impruneta) and SR69 to Cavriglia. Retrace the morning route, accounting for potential evening traffic near Florence.<br><strong>Notes:</strong> A1 toll ~€3–4. Refuel in Montevarchi (~12 km from the villa) if needed. Depart by 5:50 PM to account for traffic and ensure a 7:30 PM arrival.'
      },
      {
        time: '7:30 PM – Arrive Back at Il Cortile Pratolino',
        details: '<strong>Activity:</strong> Unwind at the villa’s infinity pool or enjoy the Chianti countryside, reflecting on Florence’s Renaissance treasures.'
      }
    ],
    timeBreakdown: [
      'Driving: ~1 hour 40 minutes (50 min to Florence, 50 min return)',
      'Morning Exploration: 2 hours 30 minutes',
      'Lunch: 1 hour',
      'Afternoon Exploration: 2 hours 30 minutes',
      'Early Dinner: 1 hour 30 minutes',
      'Buffer: ~50 minutes (for parking, traffic, or extended stops)',
      '<strong>Total:</strong> ~10 hours (9:30 AM – 7:30 PM)'
    ],
    tips: [
      '<strong>Roads:</strong> A1 is efficient with tolls; SR69 is straightforward but busier near Florence. Watch for ZTL signs and cameras in the city.',
      '<strong>Costs (per person):</strong> Parking: ~€8–12 (Parterre, 6–7 hours). Lunch: €10–20 (Trattoria Mario) or €6–8 (All’Antico Vinaio). Dinner: €15–25 (Osteria Vini e Vecchi Sapori) or €8–12 (I’ Girone De’ Ghiotti). Sights: €12 (Accademia), €5 (Baptistery), free for Duomo/Ponte Vecchio. Fuel: ~€10–15 for 90 km (at ~€1.70/L). Tolls: ~€6–8 round trip.',
      '<strong>Reservations:</strong> Book Accademia tickets (accademia.org) to skip lines. Reserve dinner at Osteria Vini e Vecchi Sapori (+39 055 293045). Trattoria Mario doesn’t take reservations; arrive early for lunch.',
      '<strong>What to Bring:</strong> Euros for parking/meals/sights, comfortable shoes for walking, a camera for Florence’s landmarks, and a light jacket (May weather: ~20–25°C).',
      '<strong>Parking:</strong> Parterre or Garage La Stazione are outside the ZTL; arrive early to secure spots. Avoid driving into Florence’s center to prevent fines.',
      '<strong>Time Management:</strong> The itinerary is comfortably paced with ~50 minutes buffer. If delayed, skip Santa Croce/Oltrarno (45m) or shorten dinner to 1 hour. Florence is walkable; stick to the suggested order to minimize backtracking.',
      '<strong>Alternative Recommendations:</strong> Activity: If you skip the Accademia, visit the Uffizi Gallery (€12, book at uffizi.it, ~1.5 hours) for Botticelli’s Birth of Venus. Restaurant: In Oltrarno, Trattoria La Casalinga (Via dei Michelozzi 9r, €12–20) offers hearty Tuscan dishes, ideal if exploring Piazzale Michelangelo. Quick Stop: If ahead of schedule, pause at Piazzale Michelangelo (10-minute drive from center, free) for sunset views before leaving.',
      '<strong>Critical Notes:</strong> Florence’s key sights (Duomo, David) are busy; pre-booked tickets for the Accademia save time. Trattoria Mario and Osteria Vini e Vecchi Sapori are local favorites with high ratings (TripAdvisor, Google: 4.5+ stars). Parking and ZTL rules are strictly enforced; use designated lots and check signs. Verify hours: Accademia (8:15 AM–6:50 PM, closed Mondays), Trattoria Mario (12:00 PM–3:30 PM, closed Sundays), Osteria Vini (12:00 PM–2:30 PM, 7:00 PM–10:00 PM). The establishment narrative on Florence’s Renaissance allure is reliable, but confirm reservations and ticket availability directly.'
    ]
  },
  {
    id: 'montefioralle',
    title: 'Montepulciano, Montalcino, and Brunello Wine',
    description: 'A wine-focused journey through Tuscany’s iconic regions',
    overview: {
      start: 'Il Cortile Pratolino, near Cavriglia, Italy (9:30 AM)',
      destinations: 'Montepulciano, Montalcino',
      end: 'Return to Il Cortile Pratolino (by 4:30 PM)',
      totalDrivingDistance: '~150 km (round trip)',
      totalDrivingTime: '~3 hours (excluding stops)',
      totalTimeForStops: '~4 hours (including wine tasting and lunch)'
    },
    detailed: [
      {
        time: '9:30 AM – Depart Il Cortile Pratolino for Montepulciano',
        details: '<strong>Drive:</strong> ~60 km, ~1 hour via SR429 toward Siena, then SS715 and SS146 toward Montepulciano. This route winds through Chianti and Val d’Orcia, offering views of vineyards, olive groves, and hilltop villages.<br><strong>Notes:</strong> The SR429 and SS146 are scenic but include curves; drive cautiously. Park in Parcheggio 7 (P7) or P1 at the base of Montepulciano for free or low-cost parking.'
      },
      {
        time: '10:30 AM – Explore Montepulciano (1 hour 15 minutes)',
        details: '<strong>Activities:</strong> Stroll the historic center, starting at Porta al Prato and walking up Via di Gracciano nel Corso to Piazza Grande, the town’s heart. Admire the Palazzo Comunale (climb the tower for views if time allows, €5, ~15 minutes) and the Duomo di Santa Maria Assunta. Pop into a small enoteca like Cantina Contucci (near Piazza Grande) for a quick taste of Vino Nobile di Montepulciano (~€5–10, no reservation needed for brief visits). Enjoy the panoramic views of the Val d’Orcia from Piazza Grande or nearby lookout points.<br><strong>Why Visit:</strong> Montepulciano is renowned for its Vino Nobile wines and medieval charm, with steep streets and Renaissance architecture. It’s a vibrant yet compact town, perfect for a short stop.<br><strong>Parking:</strong> Use P7 or P1; both are a short walk to the town entrance. Avoid driving into the ZTL (restricted traffic zone).<br><strong>Notes:</strong> Keep the visit brisk to stay on schedule. Skip the tower climb if time is tight.'
      },
      {
        time: '11:45 AM – Drive to Montalcino (35 minutes)',
        details: '<strong>Drive:</strong> ~30 km, ~35 minutes via SS146 and SP14 through Pienza. This iconic Val d’Orcia route features rolling green hills, cypress trees, and postcard-worthy landscapes.<br><strong>Notes:</strong> The road is narrow in parts; watch for cyclists. Park near the Fortezza di Montalcino in the inexpensive lot (~€1.50/hour).'
      },
      {
        time: '12:20 PM – Wine Tasting at Enoteca la Fortezza and Lunch in Montalcino (2 hours)',
        details: '<strong>Activities:</strong> Wine Tasting at Enoteca la Fortezza (1 hour, ~€20–40 per person): Located inside the Fortezza di Montalcino, this enoteca is one of the oldest wine bars in town, offering a wide selection of Brunello di Montalcino and Rosso di Montalcino wines. No reservations are typically needed for tastings, but calling ahead (+39 0577 846014) is wise. Opt for a flight of 3–6 Brunellos, often paired with a small charcuterie board (cheese, bread, local honey). The sommelier, Sergio, is praised for his knowledge and personalized recommendations. You can also climb the fortress walls for views (€4, optional). Lunch (1 hour): Dine at Enoteca Caffè La Fortezza or nearby Taverna del Grappolo Blu (Via Scale di Moglio 1, ~5-minute walk). Expect Tuscan dishes like pici pasta or bruschetta (~€15–25 per person). Book lunch in advance if possible, especially for Taverna (+39 0577 847150).<br><strong>Why Visit:</strong> Montalcino is the heart of Brunello wine country, and Enoteca la Fortezza offers a convenient, high-quality tasting experience without needing to visit out-of-town wineries. The fortress setting adds historical charm.<br><strong>Notes:</strong> Tastings are flexible; a mid-level Brunello flight (€40 for two, sharing 6 wines) is ideal for time constraints. Limit tasting to 1 hour to allow lunch time. If the enoteca is busy, try Enoteca di Piazza on Piazza Giuseppe Garibaldi for a quick alternative.'
      },
      {
        time: '2:20 PM – Explore Montalcino (45 minutes)',
        details: '<strong>Activities:</strong> Walk the main street (Via Ricasoli to Piazza del Popolo), browsing wine shops like Enoteca Bacchus or boutique stores. Visit the Palazzo dei Priori with its slender clock tower or the Chiesa di Sant’Agostino for a quick look at local art (free, ~10 minutes). Take photos of the Val d’Orcia countryside from the fortress or southern town edges.<br><strong>Why Visit:</strong> Montalcino is smaller and less touristy than Montepulciano, offering a relaxed vibe and stunning views. It’s ideal for a brief stroll after wine tasting.<br><strong>Parking:</strong> Remain parked near the Fortezza; it’s central to all activities.'
      },
      {
        time: '3:05 PM – Drive Back to Il Cortile Pratolino (85 minutes)',
        details: '<strong>Drive:</strong> ~60 km, ~1 hour 25 minutes via SP14, SR2, and SR429 through Poggibonsi and Castellina in Chianti. This return route retraces parts of the morning drive, with continued scenic views of vineyards and hills.<br><strong>Notes:</strong> Allow extra time for curves or photo stops, as the Val d’Orcia’s landscapes are captivating. Refuel in Poggibonsi if needed.'
      },
      {
        time: '4:30 PM – Arrive Back at Il Cortile Pratolino',
        details: '<strong>Activity:</strong> Unwind at the villa, perhaps enjoying the infinity pool or reflecting on the day’s wine and views.'
      }
    ],
    timeBreakdown: [
      'Driving: ~3 hours (60 min to Montepulciano, 35 min to Montalcino, 85 min return)',
      'Stops: Montepulciano (1h15m), Enoteca la Fortezza tasting + lunch (2h), Montalcino exploration (45m) = 4 hours',
      'Buffer: ~5–10 minutes (for parking or minor delays)',
      '<strong>Total:</strong> ~7 hours (9:30 AM – 4:30 PM)'
    ],
    tips: [
      '<strong>Roads:</strong> SR429, SS146, and SP14 are scenic, two-lane roads with curves and occasional cyclists. No tolls are required.',
      '<strong>Reservations:</strong> Enoteca la Fortezza typically doesn’t require reservations for tastings, but confirm via phone (+39 0577 846014) or email. Book lunch at Taverna del Grappolo Blu to secure a table.',
      '<strong>Costs:</strong> Wine tasting: ~€20–40 per person at Enoteca la Fortezza. Lunch: ~€15–25 per person. Parking: Free (P7 in Montepulciano) or ~€1.50/hour (Montalcino). Fuel: ~€15–20 for 150 km (at ~€1.70/L for gas).',
      '<strong>What to Bring:</strong> Euros for tastings/lunch, a designated driver (Italian alcohol limits are strict, 0.5 g/L), a camera for Val d’Orcia views, and comfortable shoes for Montepulciano’s steep streets.',
      '<strong>Parking:</strong> Use marked lots (P7/P1 in Montepulciano, Fortezza lot in Montalcino) to avoid ZTL fines.',
      '<strong>Time Management:</strong> The itinerary is tight to meet the 4:30 PM return. If delayed, shorten Montalcino exploration to 30 minutes or skip the tower climb in Montepulciano.',
      '<strong>Alternative Stops:</strong> If ahead of schedule, consider a quick detour to San Quirico d’Orcia (~20 minutes from Montalcino) for a less touristy village stroll, but this risks missing the 4:30 PM return.',
      '<strong>Critical Notes:</strong> Montepulciano’s steep streets can be tiring; wear comfortable shoes and prioritize Piazza Grande. Enoteca la Fortezza’s tastings are highly rated for Brunello variety and expertise; interested in the conversation and the wine tasting experience. Verify Enoteca la Fortezza’s hours (typically 9:00 AM–7:30 PM, closed Mondays) and lunch reservations to avoid delays. The establishment narrative on Tuscany’s wine regions is reliable, but always cross-check tasting prices and availability directly with venues.'
    ]
  },
  {
    id: 'civita',
    title: 'Civita di Bagnoregio',
    description: 'A journey to the timeless "Dying City"',
    overview: {
      start: 'Il Cortile Pratolino, near Cavriglia, Italy (9:30 AM)',
      destinations: 'Civita di Bagnoregio',
      end: 'Return to Il Cortile Pratolino (by 4:30 PM)',
      totalDrivingDistance: '~170 km (round trip)',
      totalDrivingTime: '~3 hours 10 minutes (excluding stops)',
      totalTimeForStops: '~3 hours 50 minutes (including exploration and lunch)'
    },
    detailed: [
      {
        time: '9:30 AM – Depart Il Cortile Pratolino for Civita di Bagnoregio',
        details: '<strong>Drive:</strong> ~85 km, ~1 hour 35 minutes via SR69 south toward Arezzo, then A1 toward Orvieto, exiting at Orvieto and following SS71 and SR2 to Bagnoregio. This route offers views of Tuscan hills and Umbrian countryside, transitioning from vineyards to rugged valleys.<br><strong>Notes:</strong> The A1 is a toll road (est. €5–7 one way), but it’s the fastest route to meet the tight schedule. Alternatively, SS71 is scenic but adds ~15 minutes. Park in the main lot at Bagnoregio (€2/hour or €10/day), near the pedestrian bridge to Civita. Check for ZTL (restricted traffic zone) signs in Bagnoregio to avoid fines.'
      },
      {
        time: '11:05 AM – Explore Civita di Bagnoregio (2 hours 15 minutes)',
        details: '<strong>Activities:</strong> Walk the Pedestrian Bridge (~10 minutes): Pay the €5 entry fee (cash or via the Civita di Bagnoregio app) to cross the 300-meter footbridge, rebuilt in 1965, offering stunning views of the “Dying City” perched on a tufa cliff. The climb is steep but manageable; wear comfortable shoes. Explore the Village (1 hour): Wander the cobblestone streets of this Etruscan-founded village (2,500+ years old). Visit the San Donato Church (7th-century, rebuilt in the 1500s, free entry) in the main square, with its simple Romanesque facade. Peek into the Geological and Landslides Museum (€3, ~15 minutes) to learn about the town’s erosion challenges. Admire the Porta Santa Maria, an Etruscan-carved gateway, and flower-laden alleys. Quick Lunch (45 minutes): Dine at Alma Civita Ristorante (Vicolo della Staffa, reservations recommended, +39 0761 792415) for Tuscan dishes like Cacio e Pepe or eggplant parmesan (€15–25/person). Reviews praise the fresh focaccia and cave-like ambiance. Alternatively, grab a sandwich at L’Arco del Gusto (under an arch, €5–10) for a faster option.<br><strong>Why Visit:</strong> Civita di Bagnoregio, with only ~11 residents, is a surreal, nearly abandoned medieval village, frozen in time due to erosion. Its isolation and Etruscan roots make it a unique stop, ideal for a short visit.<br><strong>Notes:</strong> The village is small, so 1 hour is enough to see key sights. Avoid lingering too long to stay on schedule. Cats roam freely, adding charm. High season (summer) can see crowds; shoulder season (May) is quieter.'
      },
      {
        time: '1:20 PM – Drive Back to Il Cortile Pratolino (1 hour 35 minutes)',
        details: '<strong>Drive:</strong> ~85 km, ~1 hour 35 minutes via SS71, A1 north, and SR69 to Cavriglia, retracing the morning route. The return offers similar scenic views, with opportunities for quick photo stops if ahead of schedule.<br><strong>Notes:</strong> Watch for traffic near Orvieto. Refuel in Montevarchi (~12 km from the villa) if needed. The A1 toll is ~€5–7 again.'
      },
      {
        time: '2:55 PM – Optional Quick Stop near Cavriglia (35 minutes, if time allows)',
        details: '<strong>Activity:</strong> If you’re ahead of schedule, stop at Castello di Monteluco (~5 km from the villa, ~10-minute detour) for a quick view of this 12th-century castle, now a private residence, with a scenic backdrop. Alternatively, grab a gelato in Montevarchi (Piazza Vittorio Veneto, ~15 minutes) to relax before returning.<br><strong>Notes:</strong> Skip this stop if running late to ensure arrival by 4:30 PM.'
      },
      {
        time: '4:30 PM – Arrive Back at Il Cortile Pratolino',
        details: '<strong>Activity:</strong> Relax at the villa’s infinity pool or enjoy the Chianti views, reflecting on Civita’s timeless beauty.'
      }
    ],
    timeBreakdown: [
      'Driving: ~3 hours 10 minutes (95 min to Civita, 95 min return)',
      'Stops: Civita exploration + lunch (2h15m), optional stop (35m) = ~3h50m',
      'Buffer: ~5–10 minutes (for parking or minor delays)',
      '<strong>Total:</strong> ~7 hours (9:30 AM – 4:30 PM)'
    ],
    tips: [
      '<strong>Roads:</strong> A1 is efficient but tolled; SS71 is scenic but slower. Roads are well-paved but have curves near Bagnoregio. Watch for cyclists.',
      '<strong>Costs:</strong> Civita entry: €5/person. Lunch: €15–25/person (Alma Civita) or €5–10 (L’Arco del Gusto). Parking: €4–10 in Bagnoregio. Fuel: ~€20–25 for 170 km (at ~€1.70/L). Tolls: ~€10–14 round trip.',
      '<strong>Reservations:</strong> Book Alma Civita for lunch to save time (+39 0761 792415). No reservation needed for Enoteca la Fortezza in Montalcino, as it’s not on this route.',
      '<strong>What to Bring:</strong> Euros for entry/parking/lunch, a designated driver (Italian alcohol limits: 0.5 g/L), a camera for Civita’s postcard views, and comfortable shoes for the bridge and cobblestones.',
      '<strong>Parking:</strong> Use Bagnoregio’s main lot near the bridge; avoid the lower lot reserved for residents to prevent fines.',
      '<strong>Time Management:</strong> The itinerary is tight to meet the 4:30 PM return. Limit Civita to 2h15m and skip the optional stop if delayed. Arriving early (e.g., 10:45 AM) can ease pacing.',
      '<strong>Critical Notes:</strong> Civita is small but enchanting; prioritize the bridge, San Donato Church, and a quick meal. The “Dying City” nickname reflects erosion, not safety concerns; the village is stable for visitors. Verify Enoteca la Fortezza’s relevance (Montalcino, from prior request) was excluded, as it’s too far for this itinerary. The establishment narrative on Civita’s charm is reliable, but cross-check restaurant hours (e.g., Alma Civita, typically 12:00 PM–3:00 PM) to avoid closures, especially off-season.'
    ]
  },
  {
    id: 'siena',
    title: 'Siena Medieval Journey',
    description: 'Immerse in Siena’s Gothic splendor and medieval charm',
    overview: {
      start: 'Il Cortile Pratolino, near Cavriglia, Italy (9:30 AM)',
      destinations: 'Siena',
      end: 'Return to Il Cortile Pratolino (by 7:30 PM)',
      totalDrivingDistance: '~80 km (round trip)',
      totalDrivingTime: '~1 hour 40 minutes (excluding stops)',
      totalTimeForStops: '~8 hours 20 minutes (including sightseeing, lunch, and dinner)'
    },
    detailed: [
      {
        time: '9:30 AM – Depart Il Cortile Pratolino for Siena',
        details: '<strong>Drive:</strong> ~40 km, ~50 minutes via SR69 south to the A1 (toward Siena), exiting at Siena Sud, then following signs to the city center. Alternatively, take the SR2 (Via Cassia) for a scenic route through Chianti hills (~1 hour, no tolls). The A1 is faster and recommended to maximize Siena time.<br><strong>Notes:</strong> A1 toll ~€2–3 one way. Park at Parcheggio Il Campo (Viale Vittorio Veneto, €2/hour, outside ZTL) or Stadio-Fortezza (Viale XXV Aprile, €1.80/hour), both a 5–10 minute walk to Piazza del Campo. Avoid ZTL (restricted traffic zone) to prevent fines. Arrive by 10:20 AM to secure parking, as Siena’s lots fill up.'
      },
      {
        time: '10:20 AM – Morning Exploration in Siena (2 hours 30 minutes)',
        details: '<strong>Activities (10:20 AM–12:50 PM):</strong> Piazza del Campo (45 minutes): Start at Siena’s iconic shell-shaped square, the heart of the city and site of the Palio horse race. Admire the Palazzo Pubblico (exterior, free) and its Torre del Mangia (climbing €10, ~30 minutes, skip for time). Take photos by the Fonte Gaia, a 15th-century fountain. Duomo di Siena (1 hour): Walk ~5 minutes via Via di Città to the Cattedrale di Santa Maria Assunta (€8, includes cathedral and Piccolomini Library). Marvel at the black-and-white marble facade, Bernini’s sculptures, and the inlaid marble floor (uncovered August–October, otherwise partially covered). The library’s Pinturicchio frescoes are a highlight. Skip the full Opera del Duomo combo (€15) to save time. Baptistery and Piazza San Giovanni (45 minutes): Stroll ~3 minutes to the Battistero di San Giovanni (€3 or included with Duomo ticket, ~15 minutes) for its Gothic architecture and Donatello’s baptismal font. Wander the surrounding streets (Via di Città, Via dei Pellegrini) to soak in Siena’s medieval vibe, browsing shops for ceramics or Sienese sweets like ricciarelli.<br><strong>Why Visit:</strong> Piazza del Campo and the Duomo are Siena’s crown jewels, showcasing Gothic architecture and civic pride. The Baptistery adds historical depth in a compact area.<br><strong>Notes:</strong> Wear comfortable shoes for uneven streets. Buy Duomo tickets online (operaduomo.siena.it) to skip lines, though May crowds are moderate. Stick to the itinerary order to minimize walking.'
      },
      {
        time: '12:50 PM – Lunch in Siena (1 hour)',
        details: '<strong>Restaurant Recommendation:</strong> Osteria La Taverna di Cecco (Via Cecco Angiolieri 19, near Piazza del Campo, +39 0577 288518, reservations advised). This cozy osteria serves Tuscan classics like pici cacio e pepe or ossobuco (€12–20/person). Reviews (TripAdvisor, Google: 4.5+ stars) praise the homemade pasta and local wines. Arrive by 12:50 PM to secure a table.<br><strong>Alternative:</strong> For a quicker meal, try Osteria Il Grattacielo (Via dei Pontani 8, €8–12), a tiny spot offering Sienese antipasti or panzanella. Eat standing or take away to save ~20 minutes.<br><strong>Notes:</strong> La Taverna di Cecco accepts cards; Il Grattacielo is cash-preferred. Book La Taverna ahead to avoid waits, especially for outdoor seating.'
      },
      {
        time: '1:50 PM – Afternoon Exploration in Siena (2 hours 30 minutes)',
        details: '<strong>Activities (1:50 PM–4:20 PM):</strong> Museo Civico in Palazzo Pubblico (1 hour): Return to Piazza del Campo for the Civic Museum (€10, ~45 minutes). See masterpieces like Simone Martini’s Maestà and Ambrogio Lorenzetti’s Allegory of Good and Bad Government frescoes, showcasing Siena’s 14th-century governance. The small museum is manageable within the time frame. Basilica di San Domenico (45 minutes): Walk ~10 minutes to this austere Gothic church (free, ~20 minutes). View St. Catherine of Siena’s relics (her head and thumb) and frescoes by Sodoma. The church’s hilltop location offers views of Siena’s rooftops and the Duomo. Contrada Stroll and Shopping (45 minutes): Explore Siena’s contrada (neighborhood) streets, like those of the Oca or Torre districts, marked by colorful flags. Visit Antica Drogheria Manganelli (Via di Città 71) for panforte or ricciarelli (€5–10) or browse ceramic shops along Via Stalloreggi. End with a coffee at Nannini (Via Banchi di Sopra 24, ~€3) for a local vibe.<br><strong>Why Visit:</strong> The Museo Civico offers Siena’s artistic legacy, San Domenico its spiritual side, and the contrade its community spirit. Shopping adds a taste of Sienese culture.<br><strong>Notes:</strong> Museo Civico tickets are available on-site; no pre-booking needed in May. San Domenico is free and uncrowded. Keep the contrada stroll brief to stay on schedule.'
      },
      {
        time: '4:20 PM – Early Dinner in Siena (1 hour 30 minutes)',
        details: '<strong>Restaurant Recommendation:</strong> Antica Osteria da Divo (Via Franciosa 25, near the Duomo, +39 0577 286054, reservations recommended). This atmospheric restaurant, set in Etruscan caves, serves refined Tuscan dishes like wild boar stew or Sienese pici (€15–25/person). Reviews highlight the unique setting and Chianti wine pairings. Book for 4:30 PM to ensure prompt service.<br><strong>Alternative:</strong> For a faster option, grab a pizza or focaccia at Pizzeria Poppi (Via Banchi di Sotto 23, €7–12), a local favorite with quick service, saving ~30 minutes.<br><strong>Notes:</strong> Da Divo accepts cards; book ahead for cave seating. Pizzeria Poppi is ideal for a casual, budget-friendly meal.'
      },
      {
        time: '5:50 PM – Drive Back to Il Cortile Pratolino (50 minutes)',
        details: '<strong>Drive:</strong> ~40 km, ~50 minutes via A1 north (exit Siena Sud) and SR69 to Cavriglia, retracing the morning route. Expect light evening traffic but allow for delays near Siena.<br><strong>Notes:</strong> A1 toll ~€2–3. Refuel in Montevarchi (~12 km from the villa) if needed. Depart by 5:50 PM to ensure a 7:30 PM arrival.'
      },
      {
        time: '7:30 PM – Arrive Back at Il Cortile Pratolino',
        details: '<strong>Activity:</strong> Relax at the villa’s infinity pool or enjoy the Chianti countryside, reflecting on Siena’s medieval splendor.'
      }
    ],
    timeBreakdown: [
      'Driving: ~1h40m (50 min to Siena, 50 min return)',
      'Stops: Morning exploration (2h30m), lunch (1h), afternoon exploration (2h30m), dinner (1h30m) = 7h30m',
      'Buffer: ~50 minutes for parking, traffic, or extended stops (e.g., photo ops at Piazza del Campo)',
      '<strong>Total:</strong> ~10 hours (9:30 AM – 7:30 PM)'
    ],
    tips: [
      '<strong>Roads:</strong> A1 is efficient with tolls; SR2 is scenic but adds ~10–15 minutes. Watch for ZTL signs in Siena and pedestrians in the city.',
      '<strong>Costs (per person):</strong> Parking: ~€8–12 (Il Campo, 6–7 hours). Lunch: €12–20 (La Taverna di Cecco) or €8–12 (Il Grattacielo). Dinner: €15–25 (Antica Osteria da Divo) or €7–12 (Pizzeria Poppi). Sights: €8 (Duomo), €3 (Baptistery), €10 (Museo Civico), free for San Domenico. Fuel: ~€10–12 for 80 km (at ~€1.70/L). Tolls: ~€4–6 round trip.',
      '<strong>Reservations:</strong> Book Duomo tickets (operaduomo.siena.it) to skip lines. Reserve lunch at La Taverna di Cecco (+39 0577 288518). Book dinner at Antica Osteria da Divo (+39 0577 286054).',
      '<strong>What to Bring:</strong> Euros for parking/meals/sights, comfortable shoes for Siena’s hilly streets, a camera for the Duomo and Piazza del Campo, and a light jacket (May weather: ~20–25°C).',
      '<strong>Parking:</strong> Il Campo or Stadio-Fortezza are outside the ZTL; arrive early to secure spots. Avoid driving into Siena’s center to prevent fines.',
      '<strong>Time Management:</strong> The itinerary is well-paced with ~50 minutes buffer. If delayed, skip the contrada stroll (45m) or shorten dinner to 1 hour. Siena’s center is compact; follow the order to optimize walking (~2–3 km total).',
      '<strong>Alternative Recommendations:</strong> Activity: If you skip the Museo Civico, visit the Santa Maria della Scala (€9, ~1 hour) for medieval hospital exhibits and frescoes. Restaurant: Near San Domenico, Osteria Nonna Gina (Pian dei Mantellini 2, €12–20) offers hearty Sienese dishes like pici all’aglione. Quick Stop: If ahead of schedule, pause at Fortezza Medicea (free, ~15 minutes) for city views before leaving.',
      '<strong>Critical Notes:</strong> Siena’s Duomo and Piazza del Campo are unmissable; the Duomo ticket is worth it for the floor and library. La Taverna di Cecco and Antica Osteria da Divo are top-rated (Google: 4.5+ stars) for authenticity and ambiance. ZTL and parking rules are strict; use designated lots and check signs. Verify hours: Duomo (10:00 AM–6:00 PM), Museo Civico (10:00 AM–6:00 PM), La Taverna di Cecco (12:00 PM–3:00 PM, 7:00 PM–10:00 PM), Antica Osteria da Divo (12:00 PM–2:30 PM, 7:00 PM–10:00 PM). The establishment narrative on Siena’s medieval allure is reliable, but confirm reservations and ticket availability directly.'
    ]
  },{
  id: 'umbria',
  title: 'Umbrian Hilltop Towns',
  description: 'Explore the medieval charm of Orvieto and Todi',
  overview: {
    start: 'Il Cortile Pratolino, near Cavriglia, Italy (9:30 AM)',
    destinations: 'Orvieto and Todi (Umbrian towns known for medieval architecture and scenic beauty)',
    end: 'Return to Il Cortile Pratolino (by 4:30 PM)',
    totalDrivingDistance: '~230 km (round trip)',
    totalDrivingTime: '~3 hours 20 minutes (excluding stops)',
    totalTimeForStops: '~3 hours 40 minutes (including sightseeing and lunch)'
  },
  detailed: [
    {
      time: '9:30 AM – Depart Il Cortile Pratolino for Orvieto',
      details: '<strong>Drive:</strong> ~110 km, ~1 hour 40 minutes via SR69 south to the A1, exiting at Orvieto. This route is the fastest, passing through Tuscan and Umbrian countryside with views of hills and vineyards.<br><strong>Notes:</strong> A1 toll ~€7–9 one way. Park at Parcheggio Campo della Fiera (€1.50/hour, ~5-minute funicular ride to the historic center, €1.30/ride) or Parcheggio Via Roma (€1.50/hour, 10-minute walk). Avoid ZTL (restricted traffic zone) fines. Arrive by 11:10 AM to secure parking.'
    },
    {
      time: '11:10 AM – Explore Orvieto (2 hours)',
      details: '<strong>Activities:</strong> Duomo di Orvieto (45 minutes): Visit the 13th-century Cattedrale di Santa Maria Assunta (€5, includes museum, ~30 minutes). Admire the Gothic facade, Luca Signorelli’s frescoes in the San Brizio Chapel, and intricate mosaics. The Duomo is a UNESCO highlight, rivaling Siena’s cathedral. Piazza del Duomo and Via del Duomo (45 minutes): Stroll the square and nearby streets, browsing ceramic shops or tasting Orvieto Classico wine at Enoteca Tozzi (Piazza del Duomo 10, €3–5/glass, no reservation needed). Visit the Pozzo di San Patrizio (€5, ~15 minutes), a 16th-century well with a double-helix staircase, if time allows. Quick Views (30 minutes): Walk to Torre del Moro (exterior, €2.80 to climb, skip for time) or the city walls near Via della Cava for panoramic views of Umbria’s green valleys.<br><strong>Why Visit:</strong> Orvieto’s hilltop setting, stunning Duomo, and Etruscan heritage make it a must-see Umbrian gem, compact enough for a short visit.<br><strong>Notes:</strong> Buy Duomo tickets on-site or via duomodiorvieto.it. May crowds are manageable; wear comfortable shoes for cobblestones. Prioritize the Duomo and a quick stroll to stay on schedule.'
    },
    {
      time: '1:10 PM – Lunch in Orvieto (1 hour)',
      details: '<strong>Restaurant Recommendation:</strong> Trattoria La Palomba (Via Cipriano Manente 16, +39 0763 343395, reservations advised). This family-run trattoria serves Umbrian classics like strangozzi al tartufo (truffle pasta) or pollo alla cacciatora (€12–20/person). Reviews (Google: 4.5+ stars) praise the fresh ingredients and cozy ambiance. Arrive by 1:10 PM to secure a table.<br><strong>Alternative:</strong> For a quicker meal, grab a porchetta sandwich at Bottega Vera (Corso Cavour 104, €5–8), a deli with local specialties, saving ~20 minutes.<br><strong>Notes:</strong> La Palomba accepts cards; book ahead for faster service. Bottega Vera is cash-preferred and ideal for a takeaway lunch.'
    },
    {
      time: '2:10 PM – Drive to Todi (30 minutes)',
      details: '<strong>Drive:</strong> ~40 km, ~30 minutes via SS448 and SR3bis to Todi. This scenic route follows Umbria’s rolling hills, with views of olive groves and medieval villages.<br><strong>Notes:</strong> Park at Parcheggio Porta Orvietana (free or €1/hour, ~5-minute walk to center) or Piazza Jacopone (€1/hour). Avoid ZTL zones.'
    },
    {
      time: '2:40 PM – Explore Todi (40 minutes)',
      details: '<strong>Activities:</strong> Piazza del Popolo (20 minutes): Visit Todi’s main square, one of Italy’s most picturesque, with the 13th-century Palazzo del Capitano and Palazzo del Popolo (exterior, free). Admire the Duomo di Todi (Cattedrale della Santissima Annunziata, free, ~10 minutes) for its Romanesque-Gothic facade and rose window. Quick Stroll (20 minutes): Walk Via San Fortunato to the Chiesa di San Fortunato (free, ~10 minutes), a Gothic church with a serene crypt. Browse nearby shops for Umbrian olive oil or ceramics. If time allows, enjoy views from the Rocca (park area, free, ~5 minutes) overlooking the Tiber Valley.<br><strong>Why Visit:</strong> Todi’s compact medieval center and tranquil vibe offer a quieter Umbrian experience, complementing Orvieto’s grandeur.<br><strong>Notes:</strong> Todi is small; 40 minutes covers key sights. Skip San Fortunato if time is tight. The Duomo is free and uncrowded.'
    },
    {
      time: '3:20 PM – Drive Back to Il Cortile Pratolino (1 hour 10 minutes)',
      details: '<strong>Drive:</strong> ~80 km, ~1 hour 10 minutes via SR3bis to the A1 north, exiting at Valdichiana, then SR69 to Cavriglia. The return route is slightly shorter, passing through Umbrian and Tuscan countryside.<br><strong>Notes:</strong> A1 toll ~€7–9. Allow extra time for potential traffic near Orvieto. Refuel in Montevarchi (~12 km from the villa) if needed. Depart by 3:20 PM to ensure a 4:30 PM arrival.'
    },
    {
      time: '4:30 PM – Arrive Back at Il Cortile Pratolino',
      details: '<strong>Activity:</strong> Relax at the villa’s infinity pool or reflect on Umbria’s medieval charm over a glass of Chianti Classico.'
    }
  ],
  timeBreakdown: [
    'Driving: ~3h20m (1h40m to Orvieto, 30m to Todi, 1h10m return)',
    'Stops: Orvieto exploration (2h), lunch (1h), Todi exploration (40m) = 3h40m',
    'Buffer: ~5–10 minutes for parking or minor delays',
    '<strong>Total:</strong> ~7 hours (9:30 AM – 4:30 PM)'
  ],
  tips: [
    '<strong>Roads:</strong> A1 is efficient with tolls; SR3bis and SR448 are scenic but narrow. Watch for cyclists and ZTL signs in both towns.',
    '<strong>Costs (per person):</strong> Parking: ~€5–8 (Campo della Fiera in Orvieto, Porta Orvietana in Todi). Funicular (Orvieto): €2.60 round trip. Lunch: €12–20 (La Palomba) or €5–8 (Bottega Vera). Sights: €5 (Duomo di Orvieto), €5 (Pozzo, optional), free for Todi’s Duomo/San Fortunato. Fuel: ~€20–25 for 230 km (at ~€1.70/L). Tolls: ~€14–18 round trip.',
    '<strong>Reservations:</strong> Book lunch at Trattoria La Palomba (+39 0763 343395). Duomo tickets (duomodiorvieto.it) are optional but save time.',
    '<strong>What to Bring:</strong> Euros for parking/meals/sights, comfortable shoes for Orvieto’s hills and Todi’s cobblestones, a camera for the Duomo and valley views, and a light jacket (May weather: ~20–25°C).',
    '<strong>Parking:</strong> Use Campo della Fiera (Orvieto) and Porta Orvietana (Todi) to avoid ZTL fines. Take the funicular in Orvieto for convenience. Arrive early for spots.',
    '<strong>Time Management:</strong> The itinerary is tight to meet the 4:30 PM return. If delayed, shorten Todi to 30 minutes (skip San Fortunato) or lunch to 45 minutes. Both towns are walkable (~2 km total).',
    '<strong>Alternative Recommendations:</strong> Town: Swap Todi for Spello (~50 km from Orvieto, 45-minute drive), a charming Umbrian village with flower-lined streets, if you prefer a quieter stop (requires cutting Orvieto to 1h45m). Restaurant: In Orvieto, Ristorante I Sette Consoli (Piazza Sant’Angelo 1, €20–30) offers upscale Umbrian dishes for a special lunch, if budget allows. Activity: Add a quick stop at Orvieto’s Underground Caves (€7, 30 minutes) for Etruscan history, if you skip Pozzo di San Patrizio.',
    '<strong>Critical Notes:</strong> Orvieto’s Duomo is a must-see, with frescoes rivaling the Sistine Chapel; the €5 ticket is worth it. Trattoria La Palomba is top-rated (Google: 4.5+ stars) for Umbrian cuisine, comparable to Tuscany’s rustic fare. Todi’s Piazza del Popolo is serene and photogenic, ideal for a brief visit. Verify hours: Duomo di Orvieto (9:30 AM–6:00 PM), La Palomba (12:30 PM–2:30 PM), Todi Duomo (8:00 AM–5:00 PM). The establishment narrative on Umbria’s medieval towns is reliable, but confirm reservations and parking directly.'
  ]
}
];

