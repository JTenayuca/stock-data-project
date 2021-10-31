const fs = require('fs');
//Assign historical data object to variable
let HistoricalData = {
  "0": {
  "Code": "A",
  "Name": "Agilent Technologies Inc",
  "StartDate": "2000-01-03",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "1": {
  "Code": "AA",
  "Name": "Alcoa Corporation",
  "StartDate": "2000-01-03",
  "EndDate": "2020-07-19",
  "IsActiveNow": 0,
  "IsDelisted": 0
  },
  "2": {
  "Code": "AABA",
  "Name": "Altaba Corporation",
  "StartDate": "2007-04-27",
  "EndDate": "2019-10-02",
  "IsActiveNow": 0,
  "IsDelisted": 1
  },
  "3": {
  "Code": "AAL",
  "Name": "American Airlines Group",
  "StartDate": "2015-03-23",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "4": {
  "Code": "AAP",
  "Name": "Advance Auto Parts",
  "StartDate": "2015-07-09",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "5": {
  "Code": "AAPL",
  "Name": "Apple Inc.",
  "StartDate": "2000-01-03",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "6": {
  "Code": "ABBV",
  "Name": "Abbvie Inc.",
  "StartDate": "2012-12-31",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "7": {
  "Code": "ABC",
  "Name": "AmerisourceBergen Corp\t",
  "StartDate": "2001-08-30",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "8": {
  "Code": "ABI",
  "Name": "Safety First Trust Series 2009-",
  "StartDate": "2009-05-11",
  "EndDate": "2014-05-06",
  "IsActiveNow": 0,
  "IsDelisted": 1
  },
  "9": {
  "Code": "ABK",
  "Name": "Ambac Financial Group Inc",
  "StartDate": "2000-12-05",
  "EndDate": "2008-06-10",
  "IsActiveNow": 0,
  "IsDelisted": 1
  },
  "10": {
  "Code": "ABMD",
  "Name": "Abiomed Inc",
  "StartDate": "2018-05-31",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "11": {
  "Code": "ABS",
  "Name": "Albertsons",
  "StartDate": "2000-01-03",
  "EndDate": "2006-06-02",
  "IsActiveNow": 0,
  "IsDelisted": 1
  },
  "12": {
  "Code": "ABT",
  "Name": "Abbott Laboratories",
  "StartDate": "2000-01-03",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "13": {
  "Code": "ACAS",
  "Name": "American Capital",
  "StartDate": "2000-01-03",
  "EndDate": "2009-03-03",
  "IsActiveNow": 0,
  "IsDelisted": 1
  },
  "14": {
  "Code": "ACN",
  "Name": "Accenture plc",
  "StartDate": "2011-07-06",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "15": {
  "Code": "ADBE",
  "Name": "Adobe Systems Inc",
  "StartDate": "2000-01-03",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "16": {
  "Code": "ADI",
  "Name": "Analog Devices",
  "StartDate": "2000-01-03",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "17": {
  "Code": "ADM",
  "Name": "Archer-Daniels-Midland Co",
  "StartDate": "2000-01-03",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "18": {
  "Code": "ADP",
  "Name": "Automatic Data Processing",
  "StartDate": "2000-12-01",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "19": {
  "Code": "ADS",
  "Name": "Alliance Data Systems",
  "StartDate": "2013-12-23",
  "EndDate": "2020-06-22",
  "IsActiveNow": 0,
  "IsDelisted": 0
  },
  "20": {
  "Code": "ADSK",
  "Name": "Autodesk Inc",
  "StartDate": "2000-01-03",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "21": {
  "Code": "ADT",
  "Name": "ADT Inc",
  "StartDate": "2012-10-01",
  "EndDate": "2016-05-03",
  "IsActiveNow": 0,
  "IsDelisted": 1
  },
  "22": {
  "Code": "AEE",
  "Name": "Ameren Corp",
  "StartDate": "2000-01-03",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "23": {
  "Code": "AEP",
  "Name": "American Electric Power",
  "StartDate": "2000-01-03",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "24": {
  "Code": "AES",
  "Name": "AES Corp",
  "StartDate": "2000-01-03",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "25": {
  "Code": "AET",
  "Name": "Aetna Inc",
  "StartDate": "2000-01-03",
  "EndDate": "2018-12-03",
  "IsActiveNow": 0,
  "IsDelisted": 1
  },
  "26": {
  "Code": "AFL",
  "Name": "Aflac Inc",
  "StartDate": "2000-01-03",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "27": {
  "Code": "AGN",
  "Name": "Allergan",
  "StartDate": "2010-02-01",
  "EndDate": "2020-05-12",
  "IsActiveNow": 0,
  "IsDelisted": 0
  },
  "28": {
  "Code": "AIG",
  "Name": "American International Group",
  "StartDate": "2000-01-03",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "29": {
  "Code": "AINV",
  "Name": "Apollo Investment Corp",
  "StartDate": "2004-05-03",
  "EndDate": "2020-07-19",
  "IsActiveNow": 0,
  "IsDelisted": 0
  },
  "30": {
  "Code": "AIV",
  "Name": "Apartment Investment & Management",
  "StartDate": "2003-03-14",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "31": {
  "Code": "AIZ",
  "Name": "Assurant",
  "StartDate": "2007-04-10",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "32": {
  "Code": "AJG",
  "Name": "Arthur J. Gallagher & Co.",
  "StartDate": "2016-05-31",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "33": {
  "Code": "AKAM",
  "Name": "Akamai Technologies Inc",
  "StartDate": "2007-07-12",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "34": {
  "Code": "AKS",
  "Name": "AK Steel Holding Corporation",
  "StartDate": "2000-01-03",
  "EndDate": "2011-12-16",
  "IsActiveNow": 0,
  "IsDelisted": 0
  },
  "35": {
  "Code": "ALB",
  "Name": "Albemarle Corp",
  "StartDate": "2016-07-01",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "36": {
  "Code": "ALGN",
  "Name": "Align Technology",
  "StartDate": "2017-06-19",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "37": {
  "Code": "ALK",
  "Name": "Alaska Air Group Inc",
  "StartDate": "2016-05-13",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "38": {
  "Code": "ALL",
  "Name": "Allstate Corp",
  "StartDate": "2000-01-03",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "39": {
  "Code": "ALLE",
  "Name": "Allegion",
  "StartDate": "2013-12-02",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "40": {
  "Code": "ALTR",
  "Name": "Altera Corp",
  "StartDate": "2010-02-01",
  "EndDate": "2015-12-29",
  "IsActiveNow": 0,
  "IsDelisted": 0
  },
  "41": {
  "Code": "ALXN",
  "Name": "Alexion Pharmaceuticals",
  "StartDate": "2012-05-25",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "42": {
  "Code": "AMAT",
  "Name": "Applied Materials Inc",
  "StartDate": "2000-01-03",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "43": {
  "Code": "AMCR",
  "Name": "Amcor plc",
  "StartDate": "2019-06-07",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "44": {
  "Code": "AMD",
  "Name": "Advanced Micro Devices",
  "StartDate": "2017-03-20",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "45": {
  "Code": "AME",
  "Name": "Ametek Inc",
  "StartDate": "2013-09-23",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "46": {
  "Code": "AMG",
  "Name": "Affiliated Managers Group",
  "StartDate": "2014-07-01",
  "EndDate": "2019-12-23",
  "IsActiveNow": 0,
  "IsDelisted": 0
  },
  "47": {
  "Code": "AMGN",
  "Name": "Amgen Inc",
  "StartDate": "2000-01-03",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "48": {
  "Code": "AMLN",
  "Name": "Amylin Pharmaceuticals  Inc",
  "StartDate": "2000-01-03",
  "EndDate": "2012-08-08",
  "IsActiveNow": 0,
  "IsDelisted": 1
  },
  "49": {
  "Code": "AMP",
  "Name": "Ameriprise Financial",
  "StartDate": "2005-10-03",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "50": {
  "Code": "AMT",
  "Name": "American Tower Corp",
  "StartDate": "2007-11-19",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "51": {
  "Code": "AMZN",
  "Name": "Amazon.com Inc",
  "StartDate": "2005-11-18",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "52": {
  "Code": "AN",
  "Name": "AutoNation",
  "StartDate": "2000-01-03",
  "EndDate": "2017-08-08",
  "IsActiveNow": 0,
  "IsDelisted": 0
  },
  "53": {
  "Code": "ANDV",
  "Name": "Andeavor",
  "StartDate": "2000-01-03",
  "EndDate": "2018-10-01",
  "IsActiveNow": 0,
  "IsDelisted": 1
  },
  "54": {
  "Code": "ANET",
  "Name": "Arista Networks",
  "StartDate": "2018-08-28",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "55": {
  "Code": "ANF",
  "Name": "Abercrombie & Fitch",
  "StartDate": "2000-01-03",
  "EndDate": "2013-12-23",
  "IsActiveNow": 0,
  "IsDelisted": 0
  },
  "56": {
  "Code": "ANR",
  "Name": "Alpha Natural Resources",
  "StartDate": "2011-06-01",
  "EndDate": "2012-10-02",
  "IsActiveNow": 0,
  "IsDelisted": 1
  },
  "57": {
  "Code": "ANSS",
  "Name": "ANSYS",
  "StartDate": "2017-06-19",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "58": {
  "Code": "ANTM",
  "Name": "Anthem Inc",
  "StartDate": "2002-07-25",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "59": {
  "Code": "AON",
  "Name": "Aon plc",
  "StartDate": "2000-01-03",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "60": {
  "Code": "AOS",
  "Name": "A.O. Smith Corp",
  "StartDate": "2017-07-26",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "61": {
  "Code": "APA",
  "Name": "Apache Corporation",
  "StartDate": "2000-01-03",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "62": {
  "Code": "APC",
  "Name": "Anadarko Petroleum Corp",
  "StartDate": "2000-01-03",
  "EndDate": "2019-08-09",
  "IsActiveNow": 0,
  "IsDelisted": 1
  },
  "63": {
  "Code": "APD",
  "Name": "Air Products & Chemicals Inc",
  "StartDate": "2000-01-03",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "64": {
  "Code": "APH",
  "Name": "Amphenol Corp",
  "StartDate": "2008-09-30",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "65": {
  "Code": "APOL",
  "Name": "Apollo Group Inc.",
  "StartDate": "2000-01-03",
  "EndDate": "2013-06-28",
  "IsActiveNow": 0,
  "IsDelisted": 1
  },
  "66": {
  "Code": "APTV",
  "Name": "Aptiv plc",
  "StartDate": "2012-12-24",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "67": {
  "Code": "ARE",
  "Name": "Alexandria Real Estate Equities",
  "StartDate": "2017-03-20",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "68": {
  "Code": "ARG",
  "Name": "Airgas Inc",
  "StartDate": "2009-09-28",
  "EndDate": "2016-05-23",
  "IsActiveNow": 0,
  "IsDelisted": 1
  },
  "69": {
  "Code": "ARNC",
  "Name": "Arconic Inc",
  "StartDate": "2016-11-01",
  "EndDate": "2020-07-19",
  "IsActiveNow": 0,
  "IsDelisted": 0
  },
  "70": {
  "Code": "ASH",
  "Name": "Ashland Global Holdings Inc",
  "StartDate": "2000-01-03",
  "EndDate": "2020-07-19",
  "IsActiveNow": 0,
  "IsDelisted": 0
  },
  "71": {
  "Code": "AT",
  "Name": "Atlantic Power Corporation",
  "StartDate": "2000-01-03",
  "EndDate": "2020-07-19",
  "IsActiveNow": 0,
  "IsDelisted": 0
  },
  "72": {
  "Code": "ATI",
  "Name": "Allegheny Technologies Incorporated",
  "StartDate": "2000-01-03",
  "EndDate": "2015-07-02",
  "IsActiveNow": 0,
  "IsDelisted": 0
  },
  "73": {
  "Code": "ATO",
  "Name": "Atmos Energy Corp",
  "StartDate": "2019-02-15",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "74": {
  "Code": "ATVI",
  "Name": "Activision Blizzard",
  "StartDate": "2015-08-28",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "75": {
  "Code": "AV",
  "Name": "Avaya Inc.",
  "StartDate": "2009-10-20",
  "EndDate": "2016-12-22",
  "IsActiveNow": 0,
  "IsDelisted": 1
  },
  "76": {
  "Code": "AVB",
  "Name": "AvalonBay Communities",
  "StartDate": "2007-01-10",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "77": {
  "Code": "AVGO",
  "Name": "Avago Technologies",
  "StartDate": "2014-05-08",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "78": {
  "Code": "AVP",
  "Name": "Avon Products",
  "StartDate": "2000-01-03",
  "EndDate": "2015-03-23",
  "IsActiveNow": 0,
  "IsDelisted": 1
  },
  "79": {
  "Code": "AVY",
  "Name": "Avery Dennison Corp",
  "StartDate": "2000-01-03",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "80": {
  "Code": "AWK",
  "Name": "American Water Works Company Inc",
  "StartDate": "2016-03-04",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "81": {
  "Code": "AXP",
  "Name": "American Express Co",
  "StartDate": "2000-01-03",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "82": {
  "Code": "AYE",
  "Name": "Allegheny Energy Inc.",
  "StartDate": "2000-12-05",
  "EndDate": "2011-02-25",
  "IsActiveNow": 0,
  "IsDelisted": 1
  },
  "83": {
  "Code": "AYI",
  "Name": "Acuity Brands",
  "StartDate": "2016-05-03",
  "EndDate": "2018-06-18",
  "IsActiveNow": 0,
  "IsDelisted": 0
  },
  "84": {
  "Code": "AZO",
  "Name": "AutoZone Inc",
  "StartDate": "2000-01-03",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "85": {
  "Code": "BA",
  "Name": "Boeing Company",
  "StartDate": "2000-01-03",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "86": {
  "Code": "BAC",
  "Name": "Bank of America Corp",
  "StartDate": "2000-01-03",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "87": {
  "Code": "BAX",
  "Name": "Baxter International Inc.",
  "StartDate": "2000-01-03",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "88": {
  "Code": "BBBY",
  "Name": "Bed Bath & Beyond",
  "StartDate": "2000-01-03",
  "EndDate": "2017-07-26",
  "IsActiveNow": 0,
  "IsDelisted": 0
  },
  "89": {
  "Code": "BBT",
  "Name": "BB&T Corporation",
  "StartDate": "2000-01-03",
  "EndDate": "2019-12-06",
  "IsActiveNow": 0,
  "IsDelisted": 1
  },
  "90": {
  "Code": "BBY",
  "Name": "Best Buy Co. Inc.",
  "StartDate": "2000-01-03",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "91": {
  "Code": "BC",
  "Name": "Brunswick Corporation",
  "StartDate": "2000-01-03",
  "EndDate": "2020-07-19",
  "IsActiveNow": 0,
  "IsDelisted": 0
  },
  "92": {
  "Code": "BCR",
  "Name": "CR Bard Inc",
  "StartDate": "2000-01-03",
  "EndDate": "2018-01-03",
  "IsActiveNow": 0,
  "IsDelisted": 1
  },
  "93": {
  "Code": "BDX",
  "Name": "Becton Dickinson",
  "StartDate": "2000-01-03",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "94": {
  "Code": "BEAM",
  "Name": "Beam Inc.\t",
  "StartDate": "2000-01-03",
  "EndDate": "2014-05-01",
  "IsActiveNow": 0,
  "IsDelisted": 1
  },
  "95": {
  "Code": "BEN",
  "Name": "Franklin Resources",
  "StartDate": "2000-01-03",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "96": {
  "Code": "BF-B",
  "Name": "Brown-Forman Corp.",
  "StartDate": "2000-01-03",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "97": {
  "Code": "BHF",
  "Name": "Brighthouse Financial",
  "StartDate": "2017-08-08",
  "EndDate": "2019-04-02",
  "IsActiveNow": 0,
  "IsDelisted": 0
  },
  "98": {
  "Code": "BHGE",
  "Name": "Baker Hughes Co.",
  "StartDate": "2017-07-07",
  "EndDate": "2019-10-17",
  "IsActiveNow": 0,
  "IsDelisted": 1
  },
  "99": {
  "Code": "BHI",
  "Name": "Baker Hughes Inc.",
  "StartDate": "2000-01-03",
  "EndDate": "2017-07-03",
  "IsActiveNow": 0,
  "IsDelisted": 1
  },
  "100": {
  "Code": "BIDU",
  "Name": "Bidu",
  "StartDate": "2005-08-05",
  "EndDate": "2020-07-19",
  "IsActiveNow": 0,
  "IsDelisted": 0
  },
  "101": {
  "Code": "BIG",
  "Name": "Big Lots Inc.",
  "StartDate": "2004-06-01",
  "EndDate": "2013-02-15",
  "IsActiveNow": 0,
  "IsDelisted": 0
  },
  "102": {
  "Code": "BIIB",
  "Name": "Biogen Inc.",
  "StartDate": "2003-11-13",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "103": {
  "Code": "BIO",
  "Name": "Bio-Rad Laboratories",
  "StartDate": "2020-06-22",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "104": {
  "Code": "BJS",
  "Name": "BJ Services Company",
  "StartDate": "2000-01-03",
  "EndDate": "2010-04-29",
  "IsActiveNow": 0,
  "IsDelisted": 1
  },
  "105": {
  "Code": "BK",
  "Name": "The Bank of New York Mellon",
  "StartDate": "2000-01-03",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "106": {
  "Code": "BKNG",
  "Name": "Booking Holdings Inc",
  "StartDate": "2009-11-06",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "107": {
  "Code": "BKR",
  "Name": "Baker Hughes Co",
  "StartDate": "2017-07-07",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "108": {
  "Code": "BLK",
  "Name": "BlackRock",
  "StartDate": "2011-04-04",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "109": {
  "Code": "BLL",
  "Name": "Ball Corp",
  "StartDate": "2000-01-03",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "110": {
  "Code": "BMC",
  "Name": "BMC Software",
  "StartDate": "2001-03-16",
  "EndDate": "2013-09-10",
  "IsActiveNow": 0,
  "IsDelisted": 1
  },
  "111": {
  "Code": "BMRN",
  "Name": "Biomarin Pharmaceutical Inc.",
  "StartDate": "2000-01-03",
  "EndDate": "2020-07-19",
  "IsActiveNow": 0,
  "IsDelisted": 0
  },
  "112": {
  "Code": "BMS",
  "Name": "Bemis Co Inc.",
  "StartDate": "2019-06-07",
  "EndDate": "2019-06-10",
  "IsActiveNow": 0,
  "IsDelisted": 1
  },
  "113": {
  "Code": "BMY",
  "Name": "Bristol-Myers Squibb\t",
  "StartDate": "2000-01-03",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "114": {
  "Code": "BR",
  "Name": "Broadridge Financial Solutions\t",
  "StartDate": "2018-06-18",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "115": {
  "Code": "BRCM",
  "Name": "Broadcom Corp.",
  "StartDate": "2000-01-03",
  "EndDate": "2016-02-01",
  "IsActiveNow": 0,
  "IsDelisted": 1
  },
  "116": {
  "Code": "BRK",
  "Name": "Berkshire Hathaway\t",
  "StartDate": "2010-02-16",
  "EndDate": "2020-05-13",
  "IsActiveNow": 0,
  "IsDelisted": 0
  },
  "117": {
  "Code": "BRK-B",
  "Name": "Berkshire Hathaway, Inc.",
  "StartDate": "2010-02-16",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "118": {
  "Code": "BS",
  "Name": "Bethlehem Steel",
  "StartDate": "2000-01-03",
  "EndDate": "2000-12-05",
  "IsActiveNow": 0,
  "IsDelisted": 1
  },
  "119": {
  "Code": "BSX",
  "Name": "Boston Scientific\t",
  "StartDate": "2000-01-03",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "120": {
  "Code": "BTU",
  "Name": "Peabody Energy\t",
  "StartDate": "2010-02-01",
  "EndDate": "2014-09-20",
  "IsActiveNow": 0,
  "IsDelisted": 0
  },
  "121": {
  "Code": "BUD",
  "Name": "Anheuser-Busch InBev SA/NV",
  "StartDate": "2004-02-02",
  "EndDate": "2020-07-19",
  "IsActiveNow": 0,
  "IsDelisted": 0
  },
  "122": {
  "Code": "BWA",
  "Name": "BorgWarner Inc.\t",
  "StartDate": "2011-12-16",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "123": {
  "Code": "BXLT",
  "Name": "Baxalta\t",
  "StartDate": "2015-07-01",
  "EndDate": "2016-06-03",
  "IsActiveNow": 0,
  "IsDelisted": 1
  },
  "124": {
  "Code": "BXP",
  "Name": "Boston Properties\t",
  "StartDate": "2006-04-03",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "125": {
  "Code": "C",
  "Name": "Citigroup Inc.\t",
  "StartDate": "2000-01-03",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "126": {
  "Code": "CA",
  "Name": "CA Inc.\t",
  "StartDate": "2000-01-03",
  "EndDate": "2018-11-06",
  "IsActiveNow": 0,
  "IsDelisted": 1
  },
  "127": {
  "Code": "CAG",
  "Name": "Conagra Brands\t",
  "StartDate": "2000-01-03",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "128": {
  "Code": "CAH",
  "Name": "Cardinal Health Inc.\t",
  "StartDate": "2000-01-03",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "129": {
  "Code": "CAM",
  "Name": "Cameron International\t",
  "StartDate": "2000-01-03",
  "EndDate": "2016-04-04",
  "IsActiveNow": 0,
  "IsDelisted": 1
  },
  "130": {
  "Code": "CARR",
  "Name": "Carrier Global\t",
  "StartDate": "2020-04-03",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "131": {
  "Code": "CAT",
  "Name": "Caterpillar Inc.\t",
  "StartDate": "2000-01-03",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "132": {
  "Code": "CB",
  "Name": "Chubb Corp",
  "StartDate": "2010-07-15",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "133": {
  "Code": "CBE",
  "Name": "Cooper Industries\t",
  "StartDate": "2011-11-18",
  "EndDate": "2012-12-03",
  "IsActiveNow": 0,
  "IsDelisted": 1
  },
  "134": {
  "Code": "CBG",
  "Name": "CBRE Group",
  "StartDate": "2018-01-02",
  "EndDate": "2018-03-19",
  "IsActiveNow": 0,
  "IsDelisted": 1
  },
  "135": {
  "Code": "CBH",
  "Name": "AllianzGI Convertible & Income 2024 Target Term Fund",
  "StartDate": "2000-01-03",
  "EndDate": "2020-07-19",
  "IsActiveNow": 0,
  "IsDelisted": 0
  },
  "136": {
  "Code": "CBOE",
  "Name": "Cboe Global Markets\t",
  "StartDate": "2017-03-01",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "137": {
  "Code": "CBRE",
  "Name": "CBRE Group\t",
  "StartDate": "2006-11-10",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "138": {
  "Code": "CC",
  "Name": "Chemours Company",
  "StartDate": "2000-01-03",
  "EndDate": "2020-07-19",
  "IsActiveNow": 0,
  "IsDelisted": 0
  },
  "139": {
  "Code": "CCE",
  "Name": "Coca-Cola Enterprises",
  "StartDate": "2000-01-03",
  "EndDate": "2016-05-31",
  "IsActiveNow": 0,
  "IsDelisted": 1
  },
  "140": {
  "Code": "CCI",
  "Name": "Crown Castle International Corp.",
  "StartDate": "2012-03-14",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "141": {
  "Code": "CCK",
  "Name": "Crown Holdings\t",
  "StartDate": "2000-01-03",
  "EndDate": "2000-12-05",
  "IsActiveNow": 0,
  "IsDelisted": 0
  },
  "142": {
  "Code": "CCL",
  "Name": "Carnival Corp.\t",
  "StartDate": "2000-01-03",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "143": {
  "Code": "CCU",
  "Name": "Compania Cervecerias Unidas S. A.",
  "StartDate": "2000-01-03",
  "EndDate": "2020-07-19",
  "IsActiveNow": 0,
  "IsDelisted": 0
  },
  "144": {
  "Code": "CDNS",
  "Name": "Cadence Design Systems\t",
  "StartDate": "2017-09-18",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "145": {
  "Code": "CDW",
  "Name": "CDW",
  "StartDate": "2019-09-23",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "146": {
  "Code": "CE",
  "Name": "Celanese\t",
  "StartDate": "2018-12-24",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "147": {
  "Code": "CEG",
  "Name": "Constellation Energy Group\t",
  "StartDate": "2000-01-03",
  "EndDate": "2012-03-13",
  "IsActiveNow": 0,
  "IsDelisted": 1
  },
  "148": {
  "Code": "CELG",
  "Name": "Celgene\t",
  "StartDate": "2000-01-03",
  "EndDate": "2019-11-22",
  "IsActiveNow": 0,
  "IsDelisted": 1
  },
  "149": {
  "Code": "CEPH",
  "Name": "Cephalon Inc.",
  "StartDate": "2000-01-03",
  "EndDate": "2011-10-14",
  "IsActiveNow": 0,
  "IsDelisted": 1
  },
  "150": {
  "Code": "CERN",
  "Name": "Cerner Corp.\t",
  "StartDate": "2010-04-30",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "151": {
  "Code": "CF",
  "Name": "CF Industries Holdings Inc\t",
  "StartDate": "2008-08-27",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "152": {
  "Code": "CFG",
  "Name": "Citizens Financial Group\t",
  "StartDate": "2016-01-29",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "153": {
  "Code": "CFN",
  "Name": "Carefusion",
  "StartDate": "2009-09-01",
  "EndDate": "2015-03-18",
  "IsActiveNow": 0,
  "IsDelisted": 1
  },
  "154": {
  "Code": "CHD",
  "Name": "Church & Dwight\t",
  "StartDate": "2015-12-29",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "155": {
  "Code": "CHK",
  "Name": "Chesapeake Energy\t",
  "StartDate": "2000-01-03",
  "EndDate": "2018-03-19",
  "IsActiveNow": 0,
  "IsDelisted": 0
  },
  "156": {
  "Code": "CHKP",
  "Name": "Check Point Software Technologies Ltd",
  "StartDate": "2000-01-03",
  "EndDate": "2020-07-19",
  "IsActiveNow": 0,
  "IsDelisted": 0
  },
  "157": {
  "Code": "CHRW",
  "Name": "C. H. Robinson Worldwide\t",
  "StartDate": "2007-03-02",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "158": {
  "Code": "CHTR",
  "Name": "Charter Communications\t",
  "StartDate": "2016-09-08",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "159": {
  "Code": "CI",
  "Name": "CIGNA Corp.\t",
  "StartDate": "2000-01-03",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "160": {
  "Code": "CIEN",
  "Name": "Ciena Corporation",
  "StartDate": "2000-01-03",
  "EndDate": "2020-07-19",
  "IsActiveNow": 0,
  "IsDelisted": 0
  },
  "161": {
  "Code": "CINF",
  "Name": "Cincinnati Financial\t",
  "StartDate": "2000-01-03",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "162": {
  "Code": "CIT",
  "Name": "CIT Group Inc",
  "StartDate": "2004-02-02",
  "EndDate": "2020-07-19",
  "IsActiveNow": 0,
  "IsDelisted": 0
  },
  "163": {
  "Code": "CL",
  "Name": "Colgate-Palmolive\t",
  "StartDate": "2000-01-03",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "164": {
  "Code": "CLF",
  "Name": "Cliffs Natural Resources\t",
  "StartDate": "2000-01-03",
  "EndDate": "2014-04-02",
  "IsActiveNow": 0,
  "IsDelisted": 0
  },
  "165": {
  "Code": "CLX",
  "Name": "The Clorox Company\t",
  "StartDate": "2000-01-03",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "166": {
  "Code": "CMA",
  "Name": "Comerica Inc.\t",
  "StartDate": "2000-01-03",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "167": {
  "Code": "CMCSA",
  "Name": "Comcast Corp.\t",
  "StartDate": "2015-09-18",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "168": {
  "Code": "CMCSK",
  "Name": "Comcast K Corp",
  "StartDate": "2015-09-18",
  "EndDate": "2015-12-15",
  "IsActiveNow": 0,
  "IsDelisted": 1
  },
  "169": {
  "Code": "CME",
  "Name": "CME Group Inc.\t",
  "StartDate": "2006-08-11",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "170": {
  "Code": "CMG",
  "Name": "Chipotle Mexican Grill\t",
  "StartDate": "2011-04-27",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "171": {
  "Code": "CMI",
  "Name": "Cummins Inc.\t",
  "StartDate": "2000-01-03",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "172": {
  "Code": "CMS",
  "Name": "CMS Energy\t",
  "StartDate": "2000-01-03",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "173": {
  "Code": "CNC",
  "Name": "Centene Corporation\t",
  "StartDate": "2016-03-30",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "174": {
  "Code": "CNP",
  "Name": "CenterPoint Energy\t",
  "StartDate": "2000-01-03",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "175": {
  "Code": "CNX",
  "Name": "Consol Energy\t",
  "StartDate": "2000-01-03",
  "EndDate": "2016-03-04",
  "IsActiveNow": 0,
  "IsDelisted": 0
  },
  "176": {
  "Code": "COF",
  "Name": "Capital One Financial\t",
  "StartDate": "2000-01-03",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "177": {
  "Code": "COG",
  "Name": "Cabot Oil & Gas\t",
  "StartDate": "2008-06-23",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "178": {
  "Code": "COH",
  "Name": "Coach Inc.",
  "StartDate": "2000-10-06",
  "EndDate": "2017-10-30",
  "IsActiveNow": 0,
  "IsDelisted": 1
  },
  "179": {
  "Code": "COL",
  "Name": "Rockwell Collins",
  "StartDate": "2001-07-02",
  "EndDate": "2018-12-03",
  "IsActiveNow": 0,
  "IsDelisted": 1
  },
  "180": {
  "Code": "COO",
  "Name": "The Cooper Companies\t",
  "StartDate": "2016-09-23",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "181": {
  "Code": "COP",
  "Name": "ConocoPhillips\t",
  "StartDate": "2002-09-03",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "182": {
  "Code": "COST",
  "Name": "Costco Wholesale Corp.\t",
  "StartDate": "2000-01-03",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "183": {
  "Code": "COTY",
  "Name": "Coty, Inc\t",
  "StartDate": "2016-10-03",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "184": {
  "Code": "COV",
  "Name": "Covidien",
  "StartDate": "2011-02-28",
  "EndDate": "2015-01-27",
  "IsActiveNow": 0,
  "IsDelisted": 1
  },
  "185": {
  "Code": "CPB",
  "Name": "Campbell Soup\t",
  "StartDate": "2000-01-03",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "186": {
  "Code": "CPGX",
  "Name": "Columbia Pipeline Group\t",
  "StartDate": "2015-07-02",
  "EndDate": "2016-07-05",
  "IsActiveNow": 0,
  "IsDelisted": 1
  },
  "187": {
  "Code": "CPRI",
  "Name": "Capri Holdings\t",
  "StartDate": "2011-12-15",
  "EndDate": "2020-05-12",
  "IsActiveNow": 0,
  "IsDelisted": 0
  },
  "188": {
  "Code": "CPRT",
  "Name": "Copart Inc\t",
  "StartDate": "2018-07-02",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "189": {
  "Code": "CPWR",
  "Name": "Compuware",
  "StartDate": "2000-01-03",
  "EndDate": "2011-12-31",
  "IsActiveNow": 0,
  "IsDelisted": 0
  },
  "190": {
  "Code": "CRM",
  "Name": "Salesforce.com",
  "StartDate": "2008-09-15",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "191": {
  "Code": "CSC",
  "Name": "Computer Sciences Corp",
  "StartDate": "2000-01-03",
  "EndDate": "2015-12-01",
  "IsActiveNow": 0,
  "IsDelisted": 1
  },
  "192": {
  "Code": "CSCO",
  "Name": "Cisco systems",
  "StartDate": "2000-01-03",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "193": {
  "Code": "CSRA",
  "Name": "CSRA Inc.",
  "StartDate": "2015-12-01",
  "EndDate": "2018-04-03",
  "IsActiveNow": 0,
  "IsDelisted": 1
  },
  "194": {
  "Code": "CSX",
  "Name": "CSX Corp.",
  "StartDate": "2000-01-03",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "195": {
  "Code": "CTAS",
  "Name": "Cintas Corporation",
  "StartDate": "2001-03-01",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "196": {
  "Code": "CTL",
  "Name": "CenturyLink Inc",
  "StartDate": "2000-01-03",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "197": {
  "Code": "CTRP",
  "Name": "Ctrip.com International Ltd.",
  "StartDate": "2003-12-09",
  "EndDate": "2019-11-04",
  "IsActiveNow": 0,
  "IsDelisted": 1
  },
  "198": {
  "Code": "CTRX",
  "Name": "Catamaran Corporation",
  "StartDate": "2006-06-23",
  "EndDate": "2015-07-23",
  "IsActiveNow": 0,
  "IsDelisted": 1
  },
  "199": {
  "Code": "CTSH",
  "Name": "Cognizant Technology Solutions",
  "StartDate": "2006-11-17",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "200": {
  "Code": "CTVA",
  "Name": "Corteva",
  "StartDate": "2019-06-03",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "201": {
  "Code": "CTX",
  "Name": "Centex Corp",
  "StartDate": "2007-05-01",
  "EndDate": "2018-08-20",
  "IsActiveNow": 0,
  "IsDelisted": 1
  },
  "202": {
  "Code": "CTXS",
  "Name": "Citrix Systems",
  "StartDate": "2000-01-03",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "203": {
  "Code": "CVC",
  "Name": "Cablevision Systems",
  "StartDate": "2010-12-17",
  "EndDate": "2016-06-22",
  "IsActiveNow": 0,
  "IsDelisted": 1
  },
  "204": {
  "Code": "CVG",
  "Name": "Convergys Corporation",
  "StartDate": "2000-01-03",
  "EndDate": "2018-10-04",
  "IsActiveNow": 0,
  "IsDelisted": 1
  },
  "205": {
  "Code": "CVH",
  "Name": "Coventry Health Care",
  "StartDate": "2000-01-03",
  "EndDate": "2013-05-08",
  "IsActiveNow": 0,
  "IsDelisted": 1
  },
  "206": {
  "Code": "CVS",
  "Name": "CVS Health",
  "StartDate": "2000-01-03",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "207": {
  "Code": "CVX",
  "Name": "Chevron Corp.",
  "StartDate": "2000-01-03",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "208": {
  "Code": "CXO",
  "Name": "Concho Resources\t",
  "StartDate": "2016-02-22",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "209": {
  "Code": "D",
  "Name": "Dominion Energy",
  "StartDate": "2000-01-03",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "210": {
  "Code": "DAL",
  "Name": "Delta Air Lines",
  "StartDate": "2013-09-11",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "211": {
  "Code": "DD",
  "Name": "DuPont de Nemours Inc",
  "StartDate": "2019-04-02",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "212": {
  "Code": "DDR",
  "Name": "DDR Corp.",
  "StartDate": "2000-01-03",
  "EndDate": "2018-10-11",
  "IsActiveNow": 0,
  "IsDelisted": 1
  },
  "213": {
  "Code": "DDS",
  "Name": "Dillard's, Inc",
  "StartDate": "2000-01-03",
  "EndDate": "2020-07-19",
  "IsActiveNow": 0,
  "IsDelisted": 0
  },
  "214": {
  "Code": "DE",
  "Name": "Deere & Co.",
  "StartDate": "2000-01-03",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "215": {
  "Code": "DELL",
  "Name": "Dell, Inc.",
  "StartDate": "2000-01-03",
  "EndDate": "2013-10-29",
  "IsActiveNow": 0,
  "IsDelisted": 0
  },
  "216": {
  "Code": "DF",
  "Name": "Dean Foods",
  "StartDate": "2000-01-03",
  "EndDate": "2013-05-23",
  "IsActiveNow": 0,
  "IsDelisted": 1
  },
  "217": {
  "Code": "DFS",
  "Name": "Discover Financial Services",
  "StartDate": "2007-07-02",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "218": {
  "Code": "DG",
  "Name": "Dollar General",
  "StartDate": "2012-12-03",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "219": {
  "Code": "DGX",
  "Name": "Quest Diagnostics\t",
  "StartDate": "2002-12-12",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "220": {
  "Code": "DHI",
  "Name": "D. R. Horton",
  "StartDate": "2000-01-03",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "221": {
  "Code": "DHR",
  "Name": "Danaher Corp.",
  "StartDate": "2000-01-03",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "222": {
  "Code": "DIS",
  "Name": "The Walt Disney Company",
  "StartDate": "2000-01-03",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "223": {
  "Code": "DISCA",
  "Name": "Discovery, Inc. (Class A)",
  "StartDate": "2010-03-01",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "224": {
  "Code": "DISCK",
  "Name": "Discovery, Inc. (Class C)",
  "StartDate": "2014-08-07",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "225": {
  "Code": "DISH",
  "Name": "Dish Network",
  "StartDate": "2017-03-13",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "226": {
  "Code": "DJ",
  "Name": "Dow Jones",
  "StartDate": "2000-01-03",
  "EndDate": "2007-12-31",
  "IsActiveNow": 0,
  "IsDelisted": 1
  },
  "227": {
  "Code": "DLPH",
  "Name": "Delphi Automotive",
  "StartDate": "2012-12-21",
  "EndDate": "2020-07-19",
  "IsActiveNow": 0,
  "IsDelisted": 0
  },
  "228": {
  "Code": "DLR",
  "Name": "Digital Realty Trust Inc",
  "StartDate": "2016-05-18",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "229": {
  "Code": "DLTR",
  "Name": "Dollar Tree",
  "StartDate": "2011-12-19",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "230": {
  "Code": "DNB",
  "Name": "Dun & Bradstreet",
  "StartDate": "2000-01-03",
  "EndDate": "2017-04-05",
  "IsActiveNow": 0,
  "IsDelisted": 0
  },
  "231": {
  "Code": "DNR",
  "Name": "Denbury Resources",
  "StartDate": "2000-01-03",
  "EndDate": "2015-03-23",
  "IsActiveNow": 0,
  "IsDelisted": 0
  },
  "232": {
  "Code": "DO",
  "Name": "Diamond Offshore Drilling",
  "StartDate": "2000-01-03",
  "EndDate": "2016-09-30",
  "IsActiveNow": 0,
  "IsDelisted": 0
  },
  "233": {
  "Code": "DOV",
  "Name": "Dover Corporation",
  "StartDate": "2000-01-03",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "234": {
  "Code": "DOW",
  "Name": "Dow Inc.",
  "StartDate": "2019-04-01",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "235": {
  "Code": "DPS",
  "Name": "Dr Pepper Snapple Group",
  "StartDate": "2008-05-07",
  "EndDate": "2018-07-02",
  "IsActiveNow": 0,
  "IsDelisted": 1
  },
  "236": {
  "Code": "DPZ",
  "Name": "Domino's Pizza",
  "StartDate": "2020-05-12",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "237": {
  "Code": "DRE",
  "Name": "Duke Realty Corp",
  "StartDate": "2017-07-26",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "238": {
  "Code": "DRI",
  "Name": "Darden Restaurants",
  "StartDate": "2000-01-03",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "239": {
  "Code": "DTE",
  "Name": "DTE Energy Co.",
  "StartDate": "2000-01-03",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "240": {
  "Code": "DTV",
  "Name": "DirecTV",
  "StartDate": "2000-01-03",
  "EndDate": "2015-07-29",
  "IsActiveNow": 0,
  "IsDelisted": 1
  },
  "241": {
  "Code": "DUK",
  "Name": "Duke Energy",
  "StartDate": "2000-01-03",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "242": {
  "Code": "DV",
  "Name": "DeVry, Inc.",
  "StartDate": "2000-01-03",
  "EndDate": "2012-10-01",
  "IsActiveNow": 0,
  "IsDelisted": 1
  },
  "243": {
  "Code": "DVA",
  "Name": "DaVita Inc.",
  "StartDate": "2008-07-31",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "244": {
  "Code": "DVN",
  "Name": "Devon Energy",
  "StartDate": "2000-08-30",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "245": {
  "Code": "DWDP",
  "Name": "DowduPont",
  "StartDate": "2007-04-27",
  "EndDate": "2019-05-31",
  "IsActiveNow": 0,
  "IsDelisted": 1
  },
  "246": {
  "Code": "DXC",
  "Name": "DXC Technology",
  "StartDate": "2017-04-04",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "247": {
  "Code": "DXCM",
  "Name": "DexCom",
  "StartDate": "2020-05-12",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "248": {
  "Code": "DYN",
  "Name": "Dynegy Inc. (Delaware)",
  "StartDate": "2007-04-30",
  "EndDate": "2018-04-06",
  "IsActiveNow": 0,
  "IsDelisted": 1
  },
  "249": {
  "Code": "EA",
  "Name": "Electronic Arts",
  "StartDate": "2002-07-22",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "250": {
  "Code": "EBAY",
  "Name": "eBay Inc.",
  "StartDate": "2000-01-03",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "251": {
  "Code": "ECL",
  "Name": "Ecolab Inc.",
  "StartDate": "2000-01-03",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "252": {
  "Code": "ED",
  "Name": "Consolidated Edison",
  "StartDate": "2000-01-03",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "253": {
  "Code": "EDS",
  "Name": "Exceed Company Ltd.",
  "StartDate": "2000-01-03",
  "EndDate": "2015-04-27",
  "IsActiveNow": 0,
  "IsDelisted": 1
  },
  "254": {
  "Code": "EFX",
  "Name": "Equifax Inc.",
  "StartDate": "2000-01-03",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "255": {
  "Code": "EIX",
  "Name": "Edison International\t",
  "StartDate": "2010-02-01",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "256": {
  "Code": "EK",
  "Name": "Eastman Kodak Co.",
  "StartDate": "2000-01-03",
  "EndDate": "2010-12-17",
  "IsActiveNow": 0,
  "IsDelisted": 1
  },
  "257": {
  "Code": "EL",
  "Name": "Estée Lauder Companies",
  "StartDate": "2006-01-05",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "258": {
  "Code": "EMC",
  "Name": "EMC Corporation",
  "StartDate": "2000-01-03",
  "EndDate": "2016-09-08",
  "IsActiveNow": 0,
  "IsDelisted": 1
  },
  "259": {
  "Code": "EMN",
  "Name": "Eastman Chemical",
  "StartDate": "2000-01-03",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "260": {
  "Code": "EMR",
  "Name": "Emerson Electric Company",
  "StartDate": "2000-01-03",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "261": {
  "Code": "ENDP",
  "Name": "Endo International",
  "StartDate": "2015-01-27",
  "EndDate": "2017-03-02",
  "IsActiveNow": 0,
  "IsDelisted": 0
  },
  "262": {
  "Code": "EOG",
  "Name": "EOG Resources",
  "StartDate": "2000-11-02",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "263": {
  "Code": "EP",
  "Name": "El Paso Corp.",
  "StartDate": "2002-01-02",
  "EndDate": "2012-05-17",
  "IsActiveNow": 0,
  "IsDelisted": 1
  },
  "264": {
  "Code": "EQ",
  "Name": "Equillium",
  "StartDate": "2006-05-18",
  "EndDate": "2020-07-19",
  "IsActiveNow": 0,
  "IsDelisted": 0
  },
  "265": {
  "Code": "EQIX",
  "Name": "Equinix",
  "StartDate": "2015-03-23",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "266": {
  "Code": "EQR",
  "Name": "Equity Residential",
  "StartDate": "2001-12-03",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "267": {
  "Code": "EQT",
  "Name": "EQT Corp",
  "StartDate": "2000-01-03",
  "EndDate": "2018-11-13",
  "IsActiveNow": 0,
  "IsDelisted": 0
  },
  "268": {
  "Code": "ES",
  "Name": "Eversource Energy",
  "StartDate": "2007-11-29",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "269": {
  "Code": "ESRX",
  "Name": "Express Scripts\t",
  "StartDate": "2003-09-25",
  "EndDate": "2018-12-24",
  "IsActiveNow": 0,
  "IsDelisted": 1
  },
  "270": {
  "Code": "ESS",
  "Name": "Essex Property Trust Inc",
  "StartDate": "2014-04-02",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "271": {
  "Code": "ESV",
  "Name": "Ensco plc",
  "StartDate": "2012-07-31",
  "EndDate": "2016-03-30",
  "IsActiveNow": 0,
  "IsDelisted": 1
  },
  "272": {
  "Code": "ETFC",
  "Name": "E*Trade",
  "StartDate": "2004-03-31",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "273": {
  "Code": "ETN",
  "Name": "Eaton Corporation",
  "StartDate": "2000-01-03",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "274": {
  "Code": "ETR",
  "Name": "Entergy Corp.",
  "StartDate": "2000-01-03",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "275": {
  "Code": "EVHC",
  "Name": "Envision Healthcare",
  "StartDate": "2016-12-02",
  "EndDate": "2018-10-11",
  "IsActiveNow": 0,
  "IsDelisted": 1
  },
  "276": {
  "Code": "EVRG",
  "Name": "Evergy",
  "StartDate": "2018-06-05",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "277": {
  "Code": "EW",
  "Name": "Edwards Lifesciences",
  "StartDate": "2011-03-31",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "278": {
  "Code": "EXC",
  "Name": "Exelon Corp.",
  "StartDate": "2000-10-23",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "279": {
  "Code": "EXPD",
  "Name": "Expeditors",
  "StartDate": "2007-10-10",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "280": {
  "Code": "EXPE",
  "Name": "Expedia Group",
  "StartDate": "2007-10-02",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "281": {
  "Code": "EXR",
  "Name": "Extra Space Storage",
  "StartDate": "2016-01-19",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "282": {
  "Code": "F",
  "Name": "Ford Motor Company",
  "StartDate": "2000-01-03",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "283": {
  "Code": "FANG",
  "Name": "Diamondback Energy",
  "StartDate": "2018-12-03",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "284": {
  "Code": "FAST",
  "Name": "Fastenal Co",
  "StartDate": "2008-09-15",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "285": {
  "Code": "FB",
  "Name": "Facebook, Inc.",
  "StartDate": "2013-12-23",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "286": {
  "Code": "FBHS",
  "Name": "Fortune Brands Home & Security",
  "StartDate": "2016-06-22",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "287": {
  "Code": "FCX",
  "Name": "Freeport-McMoRan Inc.",
  "StartDate": "2000-01-03",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "288": {
  "Code": "FDC",
  "Name": "First Data Corp",
  "StartDate": "2000-01-03",
  "EndDate": "2019-07-26",
  "IsActiveNow": 0,
  "IsDelisted": 1
  },
  "289": {
  "Code": "FDO",
  "Name": "Family Dollar Stores Inc.",
  "StartDate": "2000-01-03",
  "EndDate": "2015-07-08",
  "IsActiveNow": 0,
  "IsDelisted": 1
  },
  "290": {
  "Code": "FDX",
  "Name": "FedEx Corporation",
  "StartDate": "2000-01-03",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "291": {
  "Code": "FE",
  "Name": "FirstEnergy Corp",
  "StartDate": "2000-01-03",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "292": {
  "Code": "FFIV",
  "Name": "F5 Networks Inc.",
  "StartDate": "2010-12-20",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "293": {
  "Code": "FHN",
  "Name": "First Horizon",
  "StartDate": "2004-04-21",
  "EndDate": "2013-06-21",
  "IsActiveNow": 0,
  "IsDelisted": 0
  },
  "294": {
  "Code": "FII",
  "Name": "Federated Investors",
  "StartDate": "2000-01-03",
  "EndDate": "2012-12-31",
  "IsActiveNow": 0,
  "IsDelisted": 1
  },
  "295": {
  "Code": "FIS",
  "Name": "Fidelity National Information Services",
  "StartDate": "2006-11-10",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "296": {
  "Code": "FISV",
  "Name": "Fiserv Inc",
  "StartDate": "2001-04-02",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "297": {
  "Code": "FITB",
  "Name": "Fifth Third Bancorp",
  "StartDate": "2000-01-03",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "298": {
  "Code": "FL",
  "Name": "Foot Locker Inc",
  "StartDate": "2016-04-04",
  "EndDate": "2019-08-09",
  "IsActiveNow": 0,
  "IsDelisted": 0
  },
  "299": {
  "Code": "FLEX",
  "Name": "Flex Ltd",
  "StartDate": "2000-01-03",
  "EndDate": "2020-07-19",
  "IsActiveNow": 0,
  "IsDelisted": 0
  },
  "300": {
  "Code": "FLIR",
  "Name": "FLIR Systems",
  "StartDate": "2009-01-02",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "301": {
  "Code": "FLR",
  "Name": "Fluor Corporation",
  "StartDate": "2000-12-22",
  "EndDate": "2019-06-03",
  "IsActiveNow": 0,
  "IsDelisted": 0
  },
  "302": {
  "Code": "FLS",
  "Name": "Flowserve Corporation",
  "StartDate": "2008-10-02",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "303": {
  "Code": "FLT",
  "Name": "FleetCor Technologies",
  "StartDate": "2018-06-20",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "304": {
  "Code": "FMC",
  "Name": "FMC Corporation",
  "StartDate": "2009-08-19",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "305": {
  "Code": "FNM",
  "Name": "Fannie Mae",
  "StartDate": "2000-01-03",
  "EndDate": "2008-09-12",
  "IsActiveNow": 0,
  "IsDelisted": 0
  },
  "306": {
  "Code": "FOSL",
  "Name": "Fossil Group",
  "StartDate": "2012-04-03",
  "EndDate": "2016-01-05",
  "IsActiveNow": 0,
  "IsDelisted": 0
  },
  "307": {
  "Code": "FOX",
  "Name": "21st Century Fox Class B",
  "StartDate": "2015-09-18",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "308": {
  "Code": "FOXA",
  "Name": "21st Century Fox\t",
  "StartDate": "2013-06-28",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "309": {
  "Code": "FPL",
  "Name": "First Trust New Opportunities MLP & Energy Fund",
  "StartDate": "2000-01-03",
  "EndDate": "2020-07-19",
  "IsActiveNow": 0,
  "IsDelisted": 0
  },
  "310": {
  "Code": "FRC",
  "Name": "First Republic Bank",
  "StartDate": "2019-01-02",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "311": {
  "Code": "FRE",
  "Name": "Freddie Mac",
  "StartDate": "2000-01-03",
  "EndDate": "2008-09-12",
  "IsActiveNow": 0,
  "IsDelisted": 1
  },
  "312": {
  "Code": "FRT",
  "Name": "Federal Realty Investment Trust",
  "StartDate": "2016-02-01",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "313": {
  "Code": "FRX",
  "Name": "Forest Laboratories\t",
  "StartDate": "2000-01-03",
  "EndDate": "2014-07-01",
  "IsActiveNow": 0,
  "IsDelisted": 1
  },
  "314": {
  "Code": "FSLR",
  "Name": "First Solar",
  "StartDate": "2006-11-17",
  "EndDate": "2017-03-20",
  "IsActiveNow": 0,
  "IsDelisted": 0
  },
  "315": {
  "Code": "FTI",
  "Name": "TechnipFMC",
  "StartDate": "2009-06-05",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "316": {
  "Code": "FTNT",
  "Name": "Fortinet",
  "StartDate": "2018-10-11",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "317": {
  "Code": "FTR",
  "Name": "Frontier Communications",
  "StartDate": "2008-07-25",
  "EndDate": "2017-03-20",
  "IsActiveNow": 0,
  "IsDelisted": 0
  },
  "318": {
  "Code": "FTV",
  "Name": "Fortive Corp",
  "StartDate": "2016-07-01",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "319": {
  "Code": "FWLT",
  "Name": "Foster Wheeler AG",
  "StartDate": "2005-06-03",
  "EndDate": "2014-12-03",
  "IsActiveNow": 0,
  "IsDelisted": 1
  },
  "320": {
  "Code": "GAS",
  "Name": "AGL Resources",
  "StartDate": "2011-12-12",
  "EndDate": "2016-07-01",
  "IsActiveNow": 0,
  "IsDelisted": 1
  },
  "321": {
  "Code": "GCI",
  "Name": "Gannett Co.",
  "StartDate": "2000-01-03",
  "EndDate": "2020-07-19",
  "IsActiveNow": 0,
  "IsDelisted": 0
  },
  "322": {
  "Code": "GD",
  "Name": "General Dynamics",
  "StartDate": "2000-01-03",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "323": {
  "Code": "GDI",
  "Name": "Gardner Denver",
  "StartDate": "2020-03-03",
  "EndDate": "2020-03-03",
  "IsActiveNow": 0,
  "IsDelisted": 0
  },
  "324": {
  "Code": "GE",
  "Name": "General Electric",
  "StartDate": "2000-01-03",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "325": {
  "Code": "GENZ",
  "Name": "Genzyme Corp.",
  "StartDate": "2000-01-03",
  "EndDate": "2011-04-01",
  "IsActiveNow": 0,
  "IsDelisted": 1
  },
  "326": {
  "Code": "GGP",
  "Name": "GGP Inc.",
  "StartDate": "2013-12-10",
  "EndDate": "2018-08-28",
  "IsActiveNow": 0,
  "IsDelisted": 1
  },
  "327": {
  "Code": "GHC",
  "Name": "Graham Holdings\t",
  "StartDate": "2007-05-16",
  "EndDate": "2014-09-20",
  "IsActiveNow": 0,
  "IsDelisted": 0
  },
  "328": {
  "Code": "GILD",
  "Name": "Gilead Sciences",
  "StartDate": "2004-07-01",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "329": {
  "Code": "GIS",
  "Name": "General Mills",
  "StartDate": "2000-01-03",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "330": {
  "Code": "GL",
  "Name": "Globe Life Inc.",
  "StartDate": "2000-01-03",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "331": {
  "Code": "GLK",
  "Name": "Great Lakes Chemical",
  "StartDate": "2000-01-03",
  "EndDate": "2005-07-01",
  "IsActiveNow": 0,
  "IsDelisted": 1
  },
  "332": {
  "Code": "GLW",
  "Name": "Corning Inc.",
  "StartDate": "2000-01-03",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "333": {
  "Code": "GM",
  "Name": "General Motors",
  "StartDate": "2013-06-06",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "334": {
  "Code": "GMCR",
  "Name": "Keurig Green Mountain",
  "StartDate": "2014-03-21",
  "EndDate": "2016-03-07",
  "IsActiveNow": 0,
  "IsDelisted": 1
  },
  "335": {
  "Code": "GME",
  "Name": "GameStop\t",
  "StartDate": "2007-12-13",
  "EndDate": "2016-04-25",
  "IsActiveNow": 0,
  "IsDelisted": 0
  },
  "336": {
  "Code": "GNW",
  "Name": "Genworth Financial",
  "StartDate": "2004-05-25",
  "EndDate": "2015-11-18",
  "IsActiveNow": 0,
  "IsDelisted": 0
  },
  "337": {
  "Code": "GOOG",
  "Name": "Alphabet Inc. (Class C)",
  "StartDate": "2006-04-03",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "338": {
  "Code": "GOOGL",
  "Name": "Alphabet Inc. (Class A)",
  "StartDate": "2014-04-03",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "339": {
  "Code": "GPC",
  "Name": "Genuine Parts",
  "StartDate": "2000-01-03",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "340": {
  "Code": "GPN",
  "Name": "Global Payments Inc.\t",
  "StartDate": "2016-04-25",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "341": {
  "Code": "GPS",
  "Name": "Gap Inc.",
  "StartDate": "2000-01-03",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "342": {
  "Code": "GR",
  "Name": "Goodrich Corporation",
  "StartDate": "2000-01-03",
  "EndDate": "2012-07-31",
  "IsActiveNow": 0,
  "IsDelisted": 1
  },
  "343": {
  "Code": "GRA",
  "Name": "W.R. Grace",
  "StartDate": "2000-01-03",
  "EndDate": "2000-12-05",
  "IsActiveNow": 0,
  "IsDelisted": 0
  },
  "344": {
  "Code": "GRMN",
  "Name": "Garmin Ltd.",
  "StartDate": "2012-12-12",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "345": {
  "Code": "GS",
  "Name": "Goldman Sachs Group",
  "StartDate": "2002-07-22",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "346": {
  "Code": "GT",
  "Name": "The Goodyear Tire & Rubber Company",
  "StartDate": "2000-01-03",
  "EndDate": "2019-02-27",
  "IsActiveNow": 0,
  "IsDelisted": 0
  },
  "347": {
  "Code": "GWW",
  "Name": "Grainger (W.W.) Inc.",
  "StartDate": "2000-01-03",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "348": {
  "Code": "HAL",
  "Name": "Halliburton Co.",
  "StartDate": "2000-01-03",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "349": {
  "Code": "HAR",
  "Name": "Harman International Industries",
  "StartDate": "2000-01-03",
  "EndDate": "2017-03-16",
  "IsActiveNow": 0,
  "IsDelisted": 1
  },
  "350": {
  "Code": "HAS",
  "Name": "Hasbro Inc.",
  "StartDate": "2000-01-03",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "351": {
  "Code": "HBAN",
  "Name": "Huntington Bancshares",
  "StartDate": "2000-01-03",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "352": {
  "Code": "HBI",
  "Name": "Hanesbrands Inc",
  "StartDate": "2015-03-20",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "353": {
  "Code": "HCA",
  "Name": "HCA Holdings",
  "StartDate": "2015-01-27",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "354": {
  "Code": "HCBK",
  "Name": "Hudson City Bancorp Inc",
  "StartDate": "2000-01-03",
  "EndDate": "2015-11-02",
  "IsActiveNow": 0,
  "IsDelisted": 1
  },
  "355": {
  "Code": "HCN",
  "Name": "Health Care REIT Inc.",
  "StartDate": "2000-01-03",
  "EndDate": "2018-02-27",
  "IsActiveNow": 0,
  "IsDelisted": 1
  },
  "356": {
  "Code": "HCP",
  "Name": "HCP Inc.",
  "StartDate": "2000-01-03",
  "EndDate": "2019-11-04",
  "IsActiveNow": 0,
  "IsDelisted": 1
  },
  "357": {
  "Code": "HCR",
  "Name": "Hi-Crush Inc.",
  "StartDate": "2019-06-03",
  "EndDate": "2020-07-19",
  "IsActiveNow": 0,
  "IsDelisted": 0
  },
  "358": {
  "Code": "HD",
  "Name": "Home Depot",
  "StartDate": "2000-01-03",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "359": {
  "Code": "HES",
  "Name": "Hess Corporation",
  "StartDate": "2000-01-03",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "360": {
  "Code": "HFC",
  "Name": "HollyFrontier Corp",
  "StartDate": "2018-06-18",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "361": {
  "Code": "HIG",
  "Name": "Hartford Financial Svc. Gp.",
  "StartDate": "2000-01-03",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "362": {
  "Code": "HII",
  "Name": "Huntington Ingalls Industries",
  "StartDate": "2018-01-03",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "363": {
  "Code": "HLT",
  "Name": "Hilton Worldwide Holdings Inc.",
  "StartDate": "2017-06-19",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "364": {
  "Code": "HNZ",
  "Name": "H. J. Heinz Company",
  "StartDate": "2000-01-03",
  "EndDate": "2013-06-06",
  "IsActiveNow": 0,
  "IsDelisted": 1
  },
  "365": {
  "Code": "HOG",
  "Name": "Harley-Davidson",
  "StartDate": "2000-01-03",
  "EndDate": "2020-06-22",
  "IsActiveNow": 0,
  "IsDelisted": 0
  },
  "366": {
  "Code": "HOLX",
  "Name": "Hologic Inc",
  "StartDate": "2016-03-30",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "367": {
  "Code": "HON",
  "Name": "Honeywell Int'l Inc.",
  "StartDate": "2000-01-03",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "368": {
  "Code": "HOT",
  "Name": "Starwood Hotels & Resorts Worldwide Inc",
  "StartDate": "2000-01-03",
  "EndDate": "2016-09-22",
  "IsActiveNow": 0,
  "IsDelisted": 1
  },
  "369": {
  "Code": "HP",
  "Name": "Helmerich & Payne",
  "StartDate": "2010-02-26",
  "EndDate": "2020-05-22",
  "IsActiveNow": 0,
  "IsDelisted": 0
  },
  "370": {
  "Code": "HPE",
  "Name": "Hewlett Packard Enterprise",
  "StartDate": "2015-11-02",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "371": {
  "Code": "HPQ",
  "Name": "HP Inc.",
  "StartDate": "2000-01-03",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "372": {
  "Code": "HRB",
  "Name": "H&R Block",
  "StartDate": "2000-01-03",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "373": {
  "Code": "HRL",
  "Name": "Hormel Foods Corp.",
  "StartDate": "2009-03-04",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "374": {
  "Code": "HRS",
  "Name": "Harris Corporation",
  "StartDate": "2008-09-16",
  "EndDate": "2019-06-28",
  "IsActiveNow": 0,
  "IsDelisted": 1
  },
  "375": {
  "Code": "HSH",
  "Name": "Hillshire Brands Company",
  "StartDate": "2000-01-03",
  "EndDate": "2014-08-28",
  "IsActiveNow": 0,
  "IsDelisted": 1
  },
  "376": {
  "Code": "HSIC",
  "Name": "Henry Schein",
  "StartDate": "2015-03-17",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "377": {
  "Code": "HSP",
  "Name": "Hospira Inc",
  "StartDate": "2004-05-03",
  "EndDate": "2015-09-02",
  "IsActiveNow": 0,
  "IsDelisted": 1
  },
  "378": {
  "Code": "HST",
  "Name": "Host Hotels & Resorts",
  "StartDate": "2007-03-20",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "379": {
  "Code": "HSY",
  "Name": "The Hershey Company",
  "StartDate": "2000-01-03",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "380": {
  "Code": "HUM",
  "Name": "Humana Inc.",
  "StartDate": "2000-01-03",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "381": {
  "Code": "HWM",
  "Name": "Howmet Aerospace",
  "StartDate": "2000-01-03",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "382": {
  "Code": "IAC",
  "Name": "IAC / Interactive Corp.",
  "StartDate": "2003-06-23",
  "EndDate": "2020-07-19",
  "IsActiveNow": 0,
  "IsDelisted": 0
  },
  "383": {
  "Code": "IBM",
  "Name": "International Business Machines",
  "StartDate": "2000-01-03",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "384": {
  "Code": "ICE",
  "Name": "Intercontinental Exchange",
  "StartDate": "2007-09-26",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "385": {
  "Code": "IDXX",
  "Name": "IDEXX Laboratories",
  "StartDate": "2017-01-05",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "386": {
  "Code": "IEX",
  "Name": "IDEX Corporation",
  "StartDate": "2019-08-09",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "387": {
  "Code": "IFF",
  "Name": "Intl Flavors & Fragrances",
  "StartDate": "2000-01-03",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "388": {
  "Code": "IGT",
  "Name": "International Game Technology",
  "StartDate": "2000-01-03",
  "EndDate": "2014-06-20",
  "IsActiveNow": 0,
  "IsDelisted": 0
  },
  "389": {
  "Code": "ILMN",
  "Name": "Illumina Inc",
  "StartDate": "2015-11-19",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "390": {
  "Code": "INCY",
  "Name": "Incyte",
  "StartDate": "2017-02-28",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "391": {
  "Code": "INFO",
  "Name": "IHS Markit Ltd.",
  "StartDate": "2017-06-02",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "392": {
  "Code": "INFY",
  "Name": "Infosys Ltd ADR",
  "StartDate": "2000-01-03",
  "EndDate": "2020-07-19",
  "IsActiveNow": 0,
  "IsDelisted": 0
  },
  "393": {
  "Code": "INTC",
  "Name": "Intel Corp.\t",
  "StartDate": "2000-01-03",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "394": {
  "Code": "INTU",
  "Name": "Intuit Inc.",
  "StartDate": "2000-12-05",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "395": {
  "Code": "IP",
  "Name": "International Paper",
  "StartDate": "2000-01-03",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "396": {
  "Code": "IPG",
  "Name": "Interpublic Group",
  "StartDate": "2000-01-03",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "397": {
  "Code": "IPGP",
  "Name": "IPG Photonics Corp.\t",
  "StartDate": "2018-03-07",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "398": {
  "Code": "IQV",
  "Name": "IQVIA Holdings Inc.",
  "StartDate": "2017-08-29",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "399": {
  "Code": "IR",
  "Name": "Ingersoll-Rand plc",
  "StartDate": "2010-11-17",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "400": {
  "Code": "IRM",
  "Name": "Iron Mountain Incorporated",
  "StartDate": "2009-01-06",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "401": {
  "Code": "ISRG",
  "Name": "Intuitive Surgical Inc.",
  "StartDate": "2008-06-02",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "402": {
  "Code": "IT",
  "Name": "Gartner Inc",
  "StartDate": "2017-04-05",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "403": {
  "Code": "ITT",
  "Name": "ITT Corp.",
  "StartDate": "2010-02-01",
  "EndDate": "2011-10-31",
  "IsActiveNow": 0,
  "IsDelisted": 0
  },
  "404": {
  "Code": "ITW",
  "Name": "Illinois Tool Works",
  "StartDate": "2000-01-03",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "405": {
  "Code": "IVZ",
  "Name": "Invesco Ltd.",
  "StartDate": "2008-08-21",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "406": {
  "Code": "J",
  "Name": "Jacobs Engineering Group",
  "StartDate": "2007-10-26",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "407": {
  "Code": "JBHT",
  "Name": "J. B. Hunt Transport Services",
  "StartDate": "2015-07-01",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "408": {
  "Code": "JBL",
  "Name": "Jabil Circuit",
  "StartDate": "2000-01-03",
  "EndDate": "2014-11-05",
  "IsActiveNow": 0,
  "IsDelisted": 0
  },
  "409": {
  "Code": "JCI",
  "Name": "Johnson Controls International",
  "StartDate": "2010-08-27",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "410": {
  "Code": "JCP",
  "Name": "J. C. Penney\t",
  "StartDate": "2000-01-03",
  "EndDate": "2013-12-02",
  "IsActiveNow": 0,
  "IsDelisted": 0
  },
  "411": {
  "Code": "JD",
  "Name": "JD.com, Inc",
  "StartDate": "2014-05-22",
  "EndDate": "2020-07-19",
  "IsActiveNow": 0,
  "IsDelisted": 0
  },
  "412": {
  "Code": "JDSU",
  "Name": "JDS Uniphase",
  "StartDate": "2000-07-27",
  "EndDate": "2013-12-23",
  "IsActiveNow": 0,
  "IsDelisted": 1
  },
  "413": {
  "Code": "JEC",
  "Name": "Jacobs Engineering Group",
  "StartDate": "2007-10-26",
  "EndDate": "2019-12-09",
  "IsActiveNow": 0,
  "IsDelisted": 1
  },
  "414": {
  "Code": "JEF",
  "Name": "Jefferies Financial Group Inc",
  "StartDate": "2000-01-03",
  "EndDate": "2019-09-26",
  "IsActiveNow": 0,
  "IsDelisted": 0
  },
  "415": {
  "Code": "JKHY",
  "Name": "Jack Henry & Associates",
  "StartDate": "2018-11-13",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "416": {
  "Code": "JNJ",
  "Name": "Johnson & Johnson",
  "StartDate": "2000-01-03",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "417": {
  "Code": "JNPR",
  "Name": "Juniper Networks",
  "StartDate": "2006-06-02",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "418": {
  "Code": "JNS",
  "Name": "Janus Capital Group",
  "StartDate": "2003-01-02",
  "EndDate": "2011-11-18",
  "IsActiveNow": 0,
  "IsDelisted": 1
  },
  "419": {
  "Code": "JNY",
  "Name": "Jones Apparel Group\t",
  "StartDate": "2000-01-03",
  "EndDate": "2009-03-03",
  "IsActiveNow": 0,
  "IsDelisted": 1
  },
  "420": {
  "Code": "JOY",
  "Name": "Joy Global Inc.",
  "StartDate": "2011-02-25",
  "EndDate": "2015-10-07",
  "IsActiveNow": 0,
  "IsDelisted": 1
  },
  "421": {
  "Code": "JOYG",
  "Name": "Joy Global Inc.",
  "StartDate": "2001-08-01",
  "EndDate": "2012-01-13",
  "IsActiveNow": 0,
  "IsDelisted": 1
  },
  "422": {
  "Code": "JPM",
  "Name": "JPMorgan Chase & Co.",
  "StartDate": "2000-01-03",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "423": {
  "Code": "JWN",
  "Name": "Nordstrom",
  "StartDate": "2000-01-03",
  "EndDate": "2020-06-22",
  "IsActiveNow": 0,
  "IsDelisted": 0
  },
  "424": {
  "Code": "K",
  "Name": "Kellogg Co.",
  "StartDate": "2000-01-03",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "425": {
  "Code": "KBH",
  "Name": "KB Home",
  "StartDate": "2000-01-03",
  "EndDate": "2020-07-19",
  "IsActiveNow": 0,
  "IsDelisted": 0
  },
  "426": {
  "Code": "KEY",
  "Name": "KeyCorp",
  "StartDate": "2000-01-03",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "427": {
  "Code": "KEYS",
  "Name": "Keysight Technologies",
  "StartDate": "2018-11-06",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "428": {
  "Code": "KFT",
  "Name": "Kraft Foods",
  "StartDate": "2007-03-30",
  "EndDate": "2012-09-28",
  "IsActiveNow": 0,
  "IsDelisted": 1
  },
  "429": {
  "Code": "KG",
  "Name": "King Pharmaceuticals Inc.",
  "StartDate": "2000-01-03",
  "EndDate": "2010-12-17",
  "IsActiveNow": 0,
  "IsDelisted": 1
  },
  "430": {
  "Code": "KHC",
  "Name": "Kraft Heinz Co",
  "StartDate": "2015-07-06",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "431": {
  "Code": "KIM",
  "Name": "Kimco Realty",
  "StartDate": "2006-04-04",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "432": {
  "Code": "KLAC",
  "Name": "KLA Corporation",
  "StartDate": "2000-01-03",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "433": {
  "Code": "KMB",
  "Name": "Kimberly-Clark",
  "StartDate": "2000-01-03",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "434": {
  "Code": "KMI",
  "Name": "Kinder Morgan",
  "StartDate": "2012-05-17",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "435": {
  "Code": "KMX",
  "Name": "Carmax Inc",
  "StartDate": "2010-06-28",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "436": {
  "Code": "KO",
  "Name": "Coca-Cola Company\t",
  "StartDate": "2000-01-03",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "437": {
  "Code": "KORS",
  "Name": "Michael Kors",
  "StartDate": "2013-11-13",
  "EndDate": "2018-12-28",
  "IsActiveNow": 0,
  "IsDelisted": 1
  },
  "438": {
  "Code": "KR",
  "Name": "Kroger Co.",
  "StartDate": "2000-01-03",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "439": {
  "Code": "KRFT",
  "Name": "Kraft Foods Group",
  "StartDate": "2012-10-02",
  "EndDate": "2015-07-06",
  "IsActiveNow": 0,
  "IsDelisted": 1
  },
  "440": {
  "Code": "KSE",
  "Name": "KeySpan",
  "StartDate": "2000-01-03",
  "EndDate": "2007-08-24",
  "IsActiveNow": 0,
  "IsDelisted": 1
  },
  "441": {
  "Code": "KSS",
  "Name": "Kohl's Corp.",
  "StartDate": "2000-01-03",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "442": {
  "Code": "KSU",
  "Name": "Kansas City Southern\t",
  "StartDate": "2013-05-24",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "443": {
  "Code": "L",
  "Name": "Loews Corp.",
  "StartDate": "2004-02-02",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "444": {
  "Code": "LB",
  "Name": "L Brands Inc.",
  "StartDate": "2000-01-03",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "445": {
  "Code": "LBTYK",
  "Name": "Liberty Global plc",
  "StartDate": "2005-09-08",
  "EndDate": "2020-07-19",
  "IsActiveNow": 0,
  "IsDelisted": 0
  },
  "446": {
  "Code": "LDOS",
  "Name": "Leidos Holdings",
  "StartDate": "2019-08-09",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "447": {
  "Code": "LEG",
  "Name": "Leggett & Platt",
  "StartDate": "2000-01-03",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "448": {
  "Code": "LEH",
  "Name": "Lehman Brothers",
  "StartDate": "2000-01-03",
  "EndDate": "2008-09-16",
  "IsActiveNow": 0,
  "IsDelisted": 1
  },
  "449": {
  "Code": "LEN",
  "Name": "Lennar Corp.",
  "StartDate": "2005-10-04",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "450": {
  "Code": "LH",
  "Name": "Laboratory Corp. of America Holding",
  "StartDate": "2004-11-01",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "451": {
  "Code": "LHX",
  "Name": "L3Harris Technologies",
  "StartDate": "2019-07-01",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "452": {
  "Code": "LIFE",
  "Name": "Life Technologies",
  "StartDate": "2010-02-01",
  "EndDate": "2014-01-24",
  "IsActiveNow": 0,
  "IsDelisted": 0
  },
  "453": {
  "Code": "LIN",
  "Name": "Linde plc",
  "StartDate": "2000-01-03",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "454": {
  "Code": "LKQ",
  "Name": "LKQ Corporation",
  "StartDate": "2016-05-23",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "455": {
  "Code": "LLL",
  "Name": "L3 Technologies",
  "StartDate": "2018-01-02",
  "EndDate": "2019-07-01",
  "IsActiveNow": 0,
  "IsDelisted": 1
  },
  "456": {
  "Code": "LLTC",
  "Name": "Linear Technology",
  "StartDate": "2000-01-03",
  "EndDate": "2017-03-13",
  "IsActiveNow": 0,
  "IsDelisted": 1
  },
  "457": {
  "Code": "LLY",
  "Name": "Lilly (Eli) & Co.",
  "StartDate": "2000-01-03",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "458": {
  "Code": "LM",
  "Name": "Legg Mason",
  "StartDate": "2000-01-03",
  "EndDate": "2016-12-02",
  "IsActiveNow": 0,
  "IsDelisted": 0
  },
  "459": {
  "Code": "LMCA",
  "Name": "Liberty Media Corporation",
  "StartDate": "2006-05-15",
  "EndDate": "2017-01-24",
  "IsActiveNow": 0,
  "IsDelisted": 1
  },
  "460": {
  "Code": "LMCK",
  "Name": "Liberty Media Corp - Liberty Formula One",
  "StartDate": "2014-07-08",
  "EndDate": "2017-01-24",
  "IsActiveNow": 0,
  "IsDelisted": 1
  },
  "461": {
  "Code": "LMT",
  "Name": "Lockheed Martin Corp.",
  "StartDate": "2000-01-03",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "462": {
  "Code": "LNC",
  "Name": "Lincoln National",
  "StartDate": "2000-01-03",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "463": {
  "Code": "LNT",
  "Name": "Alliant Energy Corp",
  "StartDate": "2016-07-01",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "464": {
  "Code": "LO",
  "Name": "Lorillard Inc.",
  "StartDate": "2008-06-10",
  "EndDate": "2015-06-11",
  "IsActiveNow": 0,
  "IsDelisted": 1
  },
  "465": {
  "Code": "LOGI",
  "Name": "Logitech International S. A.",
  "StartDate": "2002-01-02",
  "EndDate": "2020-07-19",
  "IsActiveNow": 0,
  "IsDelisted": 0
  },
  "466": {
  "Code": "LOW",
  "Name": "Lowe's Cos.",
  "StartDate": "2000-01-03",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "467": {
  "Code": "LRCX",
  "Name": "Lam Research",
  "StartDate": "2012-06-05",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "468": {
  "Code": "LSI",
  "Name": "LSI Corporation",
  "StartDate": "2000-01-03",
  "EndDate": "2014-05-08",
  "IsActiveNow": 0,
  "IsDelisted": 0
  },
  "469": {
  "Code": "LUK",
  "Name": "Leucadia National",
  "StartDate": "2007-08-24",
  "EndDate": "2018-05-23",
  "IsActiveNow": 0,
  "IsDelisted": 1
  },
  "470": {
  "Code": "LUV",
  "Name": "Southwest Airlines",
  "StartDate": "2000-01-03",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "471": {
  "Code": "LVLT",
  "Name": "Level 3 Communications",
  "StartDate": "2014-11-05",
  "EndDate": "2017-10-13",
  "IsActiveNow": 0,
  "IsDelisted": 1
  },
  "472": {
  "Code": "LVNTA",
  "Name": "Liberty Ventures",
  "StartDate": "2012-08-10",
  "EndDate": "2018-03-09",
  "IsActiveNow": 0,
  "IsDelisted": 1
  },
  "473": {
  "Code": "LVS",
  "Name": "Las Vegas Sands",
  "StartDate": "2019-10-03",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "474": {
  "Code": "LW",
  "Name": "Lamb Weston Holdings Inc",
  "StartDate": "2018-12-03",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "475": {
  "Code": "LXK",
  "Name": "Lexmark International Inc",
  "StartDate": "2000-01-03",
  "EndDate": "2012-10-01",
  "IsActiveNow": 0,
  "IsDelisted": 1
  },
  "476": {
  "Code": "LYB",
  "Name": "LyondellBasell",
  "StartDate": "2012-09-05",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "477": {
  "Code": "LYV",
  "Name": "Live Nation Entertainment",
  "StartDate": "2019-12-23",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "478": {
  "Code": "M",
  "Name": "Macy's, Inc.",
  "StartDate": "2000-01-03",
  "EndDate": "2020-04-06",
  "IsActiveNow": 0,
  "IsDelisted": 0
  },
  "479": {
  "Code": "MA",
  "Name": "Mastercard Inc.",
  "StartDate": "2008-07-18",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "480": {
  "Code": "MAA",
  "Name": "Mid-America Apartments",
  "StartDate": "2016-12-02",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "481": {
  "Code": "MAC",
  "Name": "Macerich",
  "StartDate": "2013-05-08",
  "EndDate": "2019-12-23",
  "IsActiveNow": 0,
  "IsDelisted": 0
  },
  "482": {
  "Code": "MAR",
  "Name": "Marriott Int'l",
  "StartDate": "2000-01-03",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "483": {
  "Code": "MAS",
  "Name": "Masco Corp.",
  "StartDate": "2000-01-03",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "484": {
  "Code": "MAT",
  "Name": "Mattel Inc",
  "StartDate": "2000-01-03",
  "EndDate": "2019-06-07",
  "IsActiveNow": 0,
  "IsDelisted": 0
  },
  "485": {
  "Code": "MBI",
  "Name": "Mbia",
  "StartDate": "2000-01-03",
  "EndDate": "2020-07-19",
  "IsActiveNow": 0,
  "IsDelisted": 0
  },
  "486": {
  "Code": "MCD",
  "Name": "McDonald's Corp.",
  "StartDate": "2000-01-03",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "487": {
  "Code": "MCHP",
  "Name": "Microchip Technology",
  "StartDate": "2007-09-07",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "488": {
  "Code": "MCK",
  "Name": "McKesson Corp.",
  "StartDate": "2000-01-03",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "489": {
  "Code": "MCO",
  "Name": "Moody's Corp",
  "StartDate": "2000-01-03",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "490": {
  "Code": "MDLZ",
  "Name": "Mondelez International",
  "StartDate": "2012-10-02",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "491": {
  "Code": "MDP",
  "Name": "Meredith Corporation",
  "StartDate": "2000-01-03",
  "EndDate": "2020-07-19",
  "IsActiveNow": 0,
  "IsDelisted": 0
  },
  "492": {
  "Code": "MDT",
  "Name": "Medtronic plc",
  "StartDate": "2000-01-03",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "493": {
  "Code": "MEE",
  "Name": "Massey Energy Company",
  "StartDate": "2000-01-03",
  "EndDate": "2011-06-01",
  "IsActiveNow": 0,
  "IsDelisted": 1
  },
  "494": {
  "Code": "MET",
  "Name": "MetLife Inc.",
  "StartDate": "2000-01-03",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "495": {
  "Code": "MFCB",
  "Name": "MFC Bancorp",
  "StartDate": "2010-07-15",
  "EndDate": "2019-06-03",
  "IsActiveNow": 0,
  "IsDelisted": 1
  },
  "496": {
  "Code": "MFE",
  "Name": "McAfee Inc.",
  "StartDate": "2000-01-03",
  "EndDate": "2011-02-28",
  "IsActiveNow": 0,
  "IsDelisted": 1
  },
  "497": {
  "Code": "MGM",
  "Name": "MGM Resorts International",
  "StartDate": "2017-07-26",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "498": {
  "Code": "MHK",
  "Name": "Mohawk Industries",
  "StartDate": "2013-12-23",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "499": {
  "Code": "MHS",
  "Name": "Medco Health Solutions Inc.",
  "StartDate": "2003-08-21",
  "EndDate": "2012-04-03",
  "IsActiveNow": 0,
  "IsDelisted": 1
  },
  "500": {
  "Code": "MI",
  "Name": "Marshall & Iisley Corp.",
  "StartDate": "2000-01-03",
  "EndDate": "2011-07-05",
  "IsActiveNow": 0,
  "IsDelisted": 1
  },
  "501": {
  "Code": "MIL",
  "Name": "Millipore Inc.",
  "StartDate": "2000-01-03",
  "EndDate": "2010-07-14",
  "IsActiveNow": 0,
  "IsDelisted": 1
  },
  "502": {
  "Code": "MJN",
  "Name": "Mead Johnson",
  "StartDate": "2009-02-11",
  "EndDate": "2017-06-19",
  "IsActiveNow": 0,
  "IsDelisted": 1
  },
  "503": {
  "Code": "MKC",
  "Name": "McCormick & Co.",
  "StartDate": "2000-01-03",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "504": {
  "Code": "MKTX",
  "Name": "MarketAxess",
  "StartDate": "2019-07-01",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "505": {
  "Code": "MLM",
  "Name": "Martin Marietta Materials",
  "StartDate": "2014-07-02",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "506": {
  "Code": "MMC",
  "Name": "Marsh & McLennan",
  "StartDate": "2000-01-03",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "507": {
  "Code": "MMI",
  "Name": "Motorola Mobility",
  "StartDate": "2011-02-01",
  "EndDate": "2012-05-21",
  "IsActiveNow": 0,
  "IsDelisted": 0
  },
  "508": {
  "Code": "MMM",
  "Name": "3M Company",
  "StartDate": "2000-01-03",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "509": {
  "Code": "MNK",
  "Name": "Mallinckrodt",
  "StartDate": "2014-08-18",
  "EndDate": "2017-07-26",
  "IsActiveNow": 0,
  "IsDelisted": 0
  },
  "510": {
  "Code": "MNST",
  "Name": "Monster Beverage",
  "StartDate": "2012-06-28",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "511": {
  "Code": "MO",
  "Name": "Altria Group Inc",
  "StartDate": "2000-01-03",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "512": {
  "Code": "MOLX",
  "Name": "Molex Inc.",
  "StartDate": "2005-03-24",
  "EndDate": "2013-12-01",
  "IsActiveNow": 0,
  "IsDelisted": 1
  },
  "513": {
  "Code": "MON",
  "Name": "Monsanto",
  "StartDate": "2000-10-18",
  "EndDate": "2018-06-07",
  "IsActiveNow": 0,
  "IsDelisted": 1
  },
  "514": {
  "Code": "MOS",
  "Name": "The Mosaic Company",
  "StartDate": "2011-09-26",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "515": {
  "Code": "MPC",
  "Name": "Marathon Petroleum Corp",
  "StartDate": "2011-07-01",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "516": {
  "Code": "MRK",
  "Name": "Merck & Co.",
  "StartDate": "2000-01-03",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "517": {
  "Code": "MRO",
  "Name": "Marathon Oil Corp.",
  "StartDate": "2000-01-03",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "518": {
  "Code": "MRVL",
  "Name": "Marvell Technology Group Ltd.",
  "StartDate": "2000-07-03",
  "EndDate": "2020-07-19",
  "IsActiveNow": 0,
  "IsDelisted": 0
  },
  "519": {
  "Code": "MS",
  "Name": "Morgan Stanley",
  "StartDate": "2000-01-03",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "520": {
  "Code": "MSCI",
  "Name": "MSCI Inc",
  "StartDate": "2018-04-04",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "521": {
  "Code": "MSFT",
  "Name": "Microsoft Corp.",
  "StartDate": "2000-01-03",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "522": {
  "Code": "MSI",
  "Name": "Motorola Solutions Inc.",
  "StartDate": "2000-01-03",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "523": {
  "Code": "MTB",
  "Name": "M&T Bank Corp.",
  "StartDate": "2000-01-03",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "524": {
  "Code": "MTD",
  "Name": "Mettler Toledo",
  "StartDate": "2016-09-06",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "525": {
  "Code": "MTW",
  "Name": "The Manitowoc Company, Inc.",
  "StartDate": "2000-01-03",
  "EndDate": "2020-07-19",
  "IsActiveNow": 0,
  "IsDelisted": 0
  },
  "526": {
  "Code": "MU",
  "Name": "Micron Technology",
  "StartDate": "2000-01-03",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "527": {
  "Code": "MUR",
  "Name": "Murphy Oil",
  "StartDate": "2000-01-03",
  "EndDate": "2017-07-26",
  "IsActiveNow": 0,
  "IsDelisted": 0
  },
  "528": {
  "Code": "MWV",
  "Name": "Meadwestvaco Corporation",
  "StartDate": "2002-01-30",
  "EndDate": "2015-07-01",
  "IsActiveNow": 0,
  "IsDelisted": 1
  },
  "529": {
  "Code": "MWW",
  "Name": "Monster Worldwide Inc.",
  "StartDate": "2007-04-27",
  "EndDate": "2011-12-16",
  "IsActiveNow": 0,
  "IsDelisted": 1
  },
  "530": {
  "Code": "MXIM",
  "Name": "Maxim Integrated Products Inc",
  "StartDate": "2018-12-03",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "531": {
  "Code": "MYL",
  "Name": "Mylan N.V.",
  "StartDate": "2004-04-23",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "532": {
  "Code": "NAVI",
  "Name": "Navient Corp\t",
  "StartDate": "2014-05-01",
  "EndDate": "2018-06-05",
  "IsActiveNow": 0,
  "IsDelisted": 0
  },
  "533": {
  "Code": "NBL",
  "Name": "Noble Energy Inc",
  "StartDate": "2007-10-08",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "534": {
  "Code": "NBR",
  "Name": "Nabors Industries",
  "StartDate": "2004-02-02",
  "EndDate": "2015-03-23",
  "IsActiveNow": 0,
  "IsDelisted": 0
  },
  "535": {
  "Code": "NCLH",
  "Name": "Norwegian Cruise Line Holdings",
  "StartDate": "2017-10-13",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "536": {
  "Code": "NDAQ",
  "Name": "Nasdaq, Inc.",
  "StartDate": "2008-10-22",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "537": {
  "Code": "NE",
  "Name": "Noble Corporation plc",
  "StartDate": "2000-01-03",
  "EndDate": "2015-07-20",
  "IsActiveNow": 0,
  "IsDelisted": 0
  },
  "538": {
  "Code": "NEE",
  "Name": "NextEra Energy",
  "StartDate": "2000-01-03",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "539": {
  "Code": "NEM",
  "Name": "Newmont Corporation",
  "StartDate": "2000-01-03",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "540": {
  "Code": "NFLX",
  "Name": "Netflix Inc.",
  "StartDate": "2010-12-17",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "541": {
  "Code": "NFX",
  "Name": "Newfield Exploration",
  "StartDate": "2010-12-17",
  "EndDate": "2019-02-15",
  "IsActiveNow": 0,
  "IsDelisted": 1
  },
  "542": {
  "Code": "NI",
  "Name": "NiSource Inc.",
  "StartDate": "2000-01-03",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "543": {
  "Code": "NIHD",
  "Name": "Nii Holdings Inc.",
  "StartDate": "2003-02-28",
  "EndDate": "2019-12-30",
  "IsActiveNow": 0,
  "IsDelisted": 1
  },
  "544": {
  "Code": "NKE",
  "Name": "Nike",
  "StartDate": "2000-01-03",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "545": {
  "Code": "NKTR",
  "Name": "Nektar Therapeutics\t",
  "StartDate": "2018-03-19",
  "EndDate": "2019-10-03",
  "IsActiveNow": 0,
  "IsDelisted": 0
  },
  "546": {
  "Code": "NLOK",
  "Name": "NortonLifeLock",
  "StartDate": "2003-03-25",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "547": {
  "Code": "NLSN",
  "Name": "Nielsen Holdings",
  "StartDate": "2013-07-09",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "548": {
  "Code": "NOC",
  "Name": "Northrop Grumman",
  "StartDate": "2000-01-03",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "549": {
  "Code": "NOV",
  "Name": "National Oilwell Varco Inc.",
  "StartDate": "2005-03-14",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "550": {
  "Code": "NOVL",
  "Name": "Novell, Inc.",
  "StartDate": "2000-01-03",
  "EndDate": "2011-04-27",
  "IsActiveNow": 0,
  "IsDelisted": 1
  },
  "551": {
  "Code": "NOW",
  "Name": "ServiceNow",
  "StartDate": "2019-11-21",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "552": {
  "Code": "NRG",
  "Name": "NRG Energy",
  "StartDate": "2010-01-29",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "553": {
  "Code": "NSC",
  "Name": "Norfolk southern corp.",
  "StartDate": "2000-01-03",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "554": {
  "Code": "NSM",
  "Name": "National Semiconductor Corp.",
  "StartDate": "2007-04-25",
  "EndDate": "2011-09-23",
  "IsActiveNow": 0,
  "IsDelisted": 1
  },
  "555": {
  "Code": "NTAP",
  "Name": "NetApp",
  "StartDate": "2000-01-03",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "556": {
  "Code": "NTES",
  "Name": "NetEase, Inc.\r\n",
  "StartDate": "2002-01-02",
  "EndDate": "2020-07-17",
  "IsActiveNow": 0,
  "IsDelisted": 0
  },
  "557": {
  "Code": "NTRS",
  "Name": "Northern Trust Corp.",
  "StartDate": "2000-01-03",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "558": {
  "Code": "NUE",
  "Name": "Nucor Corp.",
  "StartDate": "2000-01-03",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "559": {
  "Code": "NVDA",
  "Name": "Nvidia Corporation",
  "StartDate": "2001-11-30",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "560": {
  "Code": "NVLS",
  "Name": "Novellus Systems",
  "StartDate": "2000-01-03",
  "EndDate": "2012-06-05",
  "IsActiveNow": 0,
  "IsDelisted": 1
  },
  "561": {
  "Code": "NVR",
  "Name": "NVR Inc",
  "StartDate": "2019-09-26",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "562": {
  "Code": "NWL",
  "Name": "Newell Brands",
  "StartDate": "2000-01-03",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "563": {
  "Code": "NWS",
  "Name": "News Corp. Class B",
  "StartDate": "2015-09-18",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "564": {
  "Code": "NWSA",
  "Name": "News Corp. Class A",
  "StartDate": "2013-08-01",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "565": {
  "Code": "NXPI",
  "Name": "NXP Semiconductors N. V.",
  "StartDate": "2010-08-06",
  "EndDate": "2020-07-17",
  "IsActiveNow": 0,
  "IsDelisted": 0
  },
  "566": {
  "Code": "NYT",
  "Name": "The New York Times Co.",
  "StartDate": "2000-01-03",
  "EndDate": "2010-12-17",
  "IsActiveNow": 0,
  "IsDelisted": 0
  },
  "567": {
  "Code": "NYX",
  "Name": "NYSE Euronext",
  "StartDate": "2006-03-08",
  "EndDate": "2013-11-13",
  "IsActiveNow": 0,
  "IsDelisted": 1
  },
  "568": {
  "Code": "O",
  "Name": "Realty Income Corporation",
  "StartDate": "2015-04-07",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "569": {
  "Code": "ODFL",
  "Name": "Old Dominion Freight Line",
  "StartDate": "2019-12-09",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "570": {
  "Code": "ODP",
  "Name": "Office Depot Inc.",
  "StartDate": "2000-01-03",
  "EndDate": "2010-12-17",
  "IsActiveNow": 0,
  "IsDelisted": 0
  },
  "571": {
  "Code": "OI",
  "Name": "Owens-Illinois",
  "StartDate": "2008-12-31",
  "EndDate": "2016-12-02",
  "IsActiveNow": 0,
  "IsDelisted": 0
  },
  "572": {
  "Code": "OKE",
  "Name": "ONEOK",
  "StartDate": "2010-03-15",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "573": {
  "Code": "OMC",
  "Name": "Omnicom Group",
  "StartDate": "2000-01-03",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "574": {
  "Code": "ORCL",
  "Name": "Oracle Corp.",
  "StartDate": "2000-01-03",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "575": {
  "Code": "ORLY",
  "Name": "O'Reilly Automotive",
  "StartDate": "2009-03-27",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "576": {
  "Code": "OTIS",
  "Name": "Otis Worldwide",
  "StartDate": "2020-04-03",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "577": {
  "Code": "OXY",
  "Name": "Occidental Petroleum",
  "StartDate": "2000-01-03",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "578": {
  "Code": "PAYC",
  "Name": "Paycom",
  "StartDate": "2020-01-28",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "579": {
  "Code": "PAYX",
  "Name": "Paychex Inc.",
  "StartDate": "2000-01-03",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "580": {
  "Code": "PBCT",
  "Name": "People's United Financial",
  "StartDate": "2008-11-13",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "581": {
  "Code": "PBI",
  "Name": "Pitney Bowes Inc",
  "StartDate": "2000-01-03",
  "EndDate": "2017-03-01",
  "IsActiveNow": 0,
  "IsDelisted": 0
  },
  "582": {
  "Code": "PCAR",
  "Name": "PACCAR Inc.",
  "StartDate": "2000-01-03",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "583": {
  "Code": "PCG",
  "Name": "PG&E Corp",
  "StartDate": "2000-01-03",
  "EndDate": "2019-01-18",
  "IsActiveNow": 0,
  "IsDelisted": 0
  },
  "584": {
  "Code": "PCL",
  "Name": "Plum Creek Timber",
  "StartDate": "2000-01-03",
  "EndDate": "2016-02-22",
  "IsActiveNow": 0,
  "IsDelisted": 1
  },
  "585": {
  "Code": "PCLN",
  "Name": "Priceline.com",
  "StartDate": "2009-11-03",
  "EndDate": "2018-02-26",
  "IsActiveNow": 0,
  "IsDelisted": 1
  },
  "586": {
  "Code": "PCP",
  "Name": "Precision Castparts Corp.",
  "StartDate": "2000-01-03",
  "EndDate": "2016-02-01",
  "IsActiveNow": 0,
  "IsDelisted": 1
  },
  "587": {
  "Code": "PCS",
  "Name": "MetroPCS",
  "StartDate": "2000-01-03",
  "EndDate": "2013-04-30",
  "IsActiveNow": 0,
  "IsDelisted": 1
  },
  "588": {
  "Code": "PDCO",
  "Name": "Patterson Companies",
  "StartDate": "2000-01-03",
  "EndDate": "2018-03-19",
  "IsActiveNow": 0,
  "IsDelisted": 0
  },
  "589": {
  "Code": "PEAK",
  "Name": "Healthpeak Properties",
  "StartDate": "2008-03-31",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "590": {
  "Code": "PEG",
  "Name": "Public Serv. Enterprise Inc.",
  "StartDate": "2000-01-03",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "591": {
  "Code": "PEP",
  "Name": "PepsiCo Inc.",
  "StartDate": "2000-01-03",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "592": {
  "Code": "PETM",
  "Name": "Petsmart Inc.",
  "StartDate": "2012-10-10",
  "EndDate": "2015-03-12",
  "IsActiveNow": 0,
  "IsDelisted": 1
  },
  "593": {
  "Code": "PFE",
  "Name": "Pfizer Inc.",
  "StartDate": "2000-01-03",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "594": {
  "Code": "PFG",
  "Name": "Principal Financial Group",
  "StartDate": "2002-07-22",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "595": {
  "Code": "PG",
  "Name": "Procter & Gamble",
  "StartDate": "2000-01-03",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "596": {
  "Code": "PGN",
  "Name": "Progress Energy Inc",
  "StartDate": "2000-12-11",
  "EndDate": "2012-07-02",
  "IsActiveNow": 0,
  "IsDelisted": 1
  },
  "597": {
  "Code": "PGR",
  "Name": "Progressive Corp.",
  "StartDate": "2000-01-03",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "598": {
  "Code": "PH",
  "Name": "Parker-Hannifin",
  "StartDate": "2000-01-03",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "599": {
  "Code": "PHM",
  "Name": "PulteGroup",
  "StartDate": "2000-01-03",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "600": {
  "Code": "PKG",
  "Name": "Packaging Corporation of America",
  "StartDate": "2017-07-26",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "601": {
  "Code": "PKI",
  "Name": "PerkinElmer",
  "StartDate": "2000-01-03",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "602": {
  "Code": "PLD",
  "Name": "Prologis",
  "StartDate": "2003-07-17",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "603": {
  "Code": "PLL",
  "Name": "Pall Corp",
  "StartDate": "2010-02-01",
  "EndDate": "2015-08-28",
  "IsActiveNow": 0,
  "IsDelisted": 0
  },
  "604": {
  "Code": "PM",
  "Name": "Philip Morris International",
  "StartDate": "2008-03-31",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "605": {
  "Code": "PNC",
  "Name": "PNC Financial Services",
  "StartDate": "2000-01-03",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "606": {
  "Code": "PNR",
  "Name": "Pentair plc",
  "StartDate": "2012-10-01",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "607": {
  "Code": "PNW",
  "Name": "Pinnacle West Capital",
  "StartDate": "2000-01-03",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "608": {
  "Code": "POM",
  "Name": "Pepco Holdings Inc",
  "StartDate": "2000-01-03",
  "EndDate": "2016-03-30",
  "IsActiveNow": 0,
  "IsDelisted": 1
  },
  "609": {
  "Code": "PPDI",
  "Name": "Pharmaceutical Product Development Inc",
  "StartDate": "2000-01-03",
  "EndDate": "2011-12-05",
  "IsActiveNow": 0,
  "IsDelisted": 1
  },
  "610": {
  "Code": "PPG",
  "Name": "PPG Industries",
  "StartDate": "2000-01-03",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "611": {
  "Code": "PPL",
  "Name": "PPL Corp.",
  "StartDate": "2000-01-03",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "612": {
  "Code": "PRGO",
  "Name": "Perrigo Co.",
  "StartDate": "2011-12-19",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "613": {
  "Code": "PRU",
  "Name": "Prudential Financial",
  "StartDate": "2002-07-22",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "614": {
  "Code": "PSA",
  "Name": "Public Storage",
  "StartDate": "2005-08-19",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "615": {
  "Code": "PSX",
  "Name": "Phillips 66",
  "StartDate": "2012-04-23",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "616": {
  "Code": "PTV",
  "Name": "Pactiv Corp.",
  "StartDate": "2000-01-03",
  "EndDate": "2010-11-17",
  "IsActiveNow": 0,
  "IsDelisted": 1
  },
  "617": {
  "Code": "PVH",
  "Name": "PVH Corp.\t",
  "StartDate": "2013-02-15",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "618": {
  "Code": "PWR",
  "Name": "Quanta Services Inc.",
  "StartDate": "2009-07-01",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "619": {
  "Code": "PX",
  "Name": "Praxair Inc.",
  "StartDate": "2000-01-03",
  "EndDate": "2018-10-30",
  "IsActiveNow": 0,
  "IsDelisted": 1
  },
  "620": {
  "Code": "PXD",
  "Name": "Pioneer Natural Resources",
  "StartDate": "2008-09-24",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "621": {
  "Code": "PYPL",
  "Name": "PayPal",
  "StartDate": "2015-07-20",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "622": {
  "Code": "Q",
  "Name": "Qwest Communications",
  "StartDate": "2007-06-04",
  "EndDate": "2011-03-31",
  "IsActiveNow": 0,
  "IsDelisted": 1
  },
  "623": {
  "Code": "QCOM",
  "Name": "QUALCOMM Inc.",
  "StartDate": "2000-01-03",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "624": {
  "Code": "QEP",
  "Name": "QEP Resources\t",
  "StartDate": "2010-07-01",
  "EndDate": "2015-07-01",
  "IsActiveNow": 0,
  "IsDelisted": 0
  },
  "625": {
  "Code": "QGEN",
  "Name": "Qiagen NV",
  "StartDate": "2005-02-15",
  "EndDate": "2020-07-17",
  "IsActiveNow": 0,
  "IsDelisted": 0
  },
  "626": {
  "Code": "QLGC",
  "Name": "QLogic Corporation",
  "StartDate": "2000-01-03",
  "EndDate": "2016-08-15",
  "IsActiveNow": 0,
  "IsDelisted": 1
  },
  "627": {
  "Code": "QRVO",
  "Name": "Qorvo, Inc",
  "StartDate": "2015-06-11",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "628": {
  "Code": "QTRN",
  "Name": "Quintiles Transnational",
  "StartDate": "2000-01-03",
  "EndDate": "2003-09-25",
  "IsActiveNow": 0,
  "IsDelisted": 1
  },
  "629": {
  "Code": "QVCA",
  "Name": "Liberty Interactive Corporation",
  "StartDate": "2007-04-26",
  "EndDate": "2018-03-09",
  "IsActiveNow": 0,
  "IsDelisted": 1
  },
  "630": {
  "Code": "R",
  "Name": "Ryder Systems Inc.",
  "StartDate": "2000-01-03",
  "EndDate": "2017-06-19",
  "IsActiveNow": 0,
  "IsDelisted": 0
  },
  "631": {
  "Code": "RAD",
  "Name": "RiteAid",
  "StartDate": "2000-01-03",
  "EndDate": "2000-07-27",
  "IsActiveNow": 0,
  "IsDelisted": 0
  },
  "632": {
  "Code": "RAI",
  "Name": "Reynolds American\t",
  "StartDate": "2004-08-02",
  "EndDate": "2017-07-26",
  "IsActiveNow": 0,
  "IsDelisted": 1
  },
  "633": {
  "Code": "RCL",
  "Name": "Royal Caribbean Cruises Ltd",
  "StartDate": "2014-12-05",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "634": {
  "Code": "RDC",
  "Name": "Rowan Companies plc",
  "StartDate": "2000-01-03",
  "EndDate": "2014-08-18",
  "IsActiveNow": 0,
  "IsDelisted": 1
  },
  "635": {
  "Code": "RE",
  "Name": "Everest Re Group Ltd.",
  "StartDate": "2017-06-19",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "636": {
  "Code": "REG",
  "Name": "Regency Centers Corporation",
  "StartDate": "2017-03-02",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "637": {
  "Code": "REGN",
  "Name": "Regeneron Pharmaceuticals",
  "StartDate": "2013-05-01",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "638": {
  "Code": "RF",
  "Name": "Regions Financial Corp.",
  "StartDate": "2000-01-03",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "639": {
  "Code": "RHI",
  "Name": "Robert Half International",
  "StartDate": "2000-12-05",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "640": {
  "Code": "RHT",
  "Name": "Red Hat",
  "StartDate": "2018-01-02",
  "EndDate": "2019-07-05",
  "IsActiveNow": 0,
  "IsDelisted": 1
  },
  "641": {
  "Code": "RIG",
  "Name": "Transocean Ltd.",
  "StartDate": "2013-10-29",
  "EndDate": "2017-07-26",
  "IsActiveNow": 0,
  "IsDelisted": 0
  },
  "642": {
  "Code": "RJF",
  "Name": "Raymond James Financial Inc.",
  "StartDate": "2017-03-20",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "643": {
  "Code": "RL",
  "Name": "Ralph Lauren Corporation",
  "StartDate": "2007-02-02",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "644": {
  "Code": "RMD",
  "Name": "ResMed",
  "StartDate": "2017-07-26",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "645": {
  "Code": "ROK",
  "Name": "Rockwell Automation Inc.",
  "StartDate": "2000-01-03",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "646": {
  "Code": "ROL",
  "Name": "Rollins Inc.",
  "StartDate": "2018-10-01",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "647": {
  "Code": "ROP",
  "Name": "Roper Technologies",
  "StartDate": "2009-12-23",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "648": {
  "Code": "ROST",
  "Name": "Ross Stores",
  "StartDate": "2009-12-21",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "649": {
  "Code": "RRC",
  "Name": "Range Resources",
  "StartDate": "2007-12-20",
  "EndDate": "2018-06-18",
  "IsActiveNow": 0,
  "IsDelisted": 0
  },
  "650": {
  "Code": "RRD",
  "Name": "R.R. Donnelley",
  "StartDate": "2004-03-01",
  "EndDate": "2012-12-11",
  "IsActiveNow": 0,
  "IsDelisted": 0
  },
  "651": {
  "Code": "RSG",
  "Name": "Republic Services Inc\t",
  "StartDate": "2008-12-05",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "652": {
  "Code": "RSH",
  "Name": "RadioShack Corp.",
  "StartDate": "2000-05-31",
  "EndDate": "2011-06-30",
  "IsActiveNow": 0,
  "IsDelisted": 1
  },
  "653": {
  "Code": "RTN",
  "Name": "Raytheon Company",
  "StartDate": "2001-05-15",
  "EndDate": "2020-04-06",
  "IsActiveNow": 0,
  "IsDelisted": 1
  },
  "654": {
  "Code": "RTX",
  "Name": "Raytheon Technologies",
  "StartDate": "2000-01-03",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "655": {
  "Code": "RX",
  "Name": "IMS Health",
  "StartDate": "2000-01-03",
  "EndDate": "2010-02-26",
  "IsActiveNow": 0,
  "IsDelisted": 1
  },
  "656": {
  "Code": "RYAAY",
  "Name": "Ryanair Holdings plc",
  "StartDate": "2000-01-03",
  "EndDate": "2020-07-17",
  "IsActiveNow": 0,
  "IsDelisted": 0
  },
  "657": {
  "Code": "S",
  "Name": "Sprint Nextel Corp.",
  "StartDate": "2000-01-03",
  "EndDate": "2013-07-08",
  "IsActiveNow": 0,
  "IsDelisted": 0
  },
  "658": {
  "Code": "SAIC",
  "Name": "Science Applications International Corporation",
  "StartDate": "2000-01-03",
  "EndDate": "2013-09-20",
  "IsActiveNow": 0,
  "IsDelisted": 0
  },
  "659": {
  "Code": "SBAC",
  "Name": "SBA Communications",
  "StartDate": "2017-09-01",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "660": {
  "Code": "SBL",
  "Name": "Symbol Technologies",
  "StartDate": "2000-12-05",
  "EndDate": "2007-01-10",
  "IsActiveNow": 0,
  "IsDelisted": 1
  },
  "661": {
  "Code": "SBUX",
  "Name": "Starbucks Corp.",
  "StartDate": "2000-01-03",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "662": {
  "Code": "SCG",
  "Name": "SCANA\t",
  "StartDate": "2000-01-03",
  "EndDate": "2019-01-02",
  "IsActiveNow": 0,
  "IsDelisted": 1
  },
  "663": {
  "Code": "SCHW",
  "Name": "Charles Schwab Corporation\t",
  "StartDate": "2000-01-03",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "664": {
  "Code": "SE",
  "Name": "Spectra Energy Corp",
  "StartDate": "2010-02-01",
  "EndDate": "2017-02-28",
  "IsActiveNow": 0,
  "IsDelisted": 0
  },
  "665": {
  "Code": "SEE",
  "Name": "Sealed Air",
  "StartDate": "2000-01-03",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "666": {
  "Code": "SGP",
  "Name": "Schering-Plough Corp.",
  "StartDate": "2000-01-03",
  "EndDate": "2009-11-03",
  "IsActiveNow": 0,
  "IsDelisted": 1
  },
  "667": {
  "Code": "SHLD",
  "Name": "Sears Holding Corporation",
  "StartDate": "2005-03-28",
  "EndDate": "2012-09-05",
  "IsActiveNow": 0,
  "IsDelisted": 1
  },
  "668": {
  "Code": "SHW",
  "Name": "Sherwin-Williams",
  "StartDate": "2000-01-03",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "669": {
  "Code": "SIAL",
  "Name": "Sigma-Aldrich Corp",
  "StartDate": "2000-01-03",
  "EndDate": "2015-11-19",
  "IsActiveNow": 0,
  "IsDelisted": 1
  },
  "670": {
  "Code": "SIG",
  "Name": "Signet Jewelers",
  "StartDate": "2015-07-29",
  "EndDate": "2018-03-19",
  "IsActiveNow": 0,
  "IsDelisted": 0
  },
  "671": {
  "Code": "SII",
  "Name": "Smith International Inc.",
  "StartDate": "2000-01-03",
  "EndDate": "2010-08-26",
  "IsActiveNow": 0,
  "IsDelisted": 0
  },
  "672": {
  "Code": "SIRI",
  "Name": "Sirius XM Holdings Inc",
  "StartDate": "2000-01-12",
  "EndDate": "2020-07-19",
  "IsActiveNow": 0,
  "IsDelisted": 0
  },
  "673": {
  "Code": "SIVB",
  "Name": "SVB Financial",
  "StartDate": "2018-03-19",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "674": {
  "Code": "SJM",
  "Name": "JM Smucker",
  "StartDate": "2008-11-06",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "675": {
  "Code": "SLB",
  "Name": "Schlumberger Ltd.",
  "StartDate": "2000-01-03",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "676": {
  "Code": "SLE",
  "Name": "Sara Lee Corp.",
  "StartDate": "2000-01-03",
  "EndDate": "2012-06-29",
  "IsActiveNow": 0,
  "IsDelisted": 1
  },
  "677": {
  "Code": "SLG",
  "Name": "SL Green Realty",
  "StartDate": "2015-03-20",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "678": {
  "Code": "SLM",
  "Name": "SLM Corporation",
  "StartDate": "2001-11-07",
  "EndDate": "2014-05-01",
  "IsActiveNow": 0,
  "IsDelisted": 0
  },
  "679": {
  "Code": "SNA",
  "Name": "Snap-on",
  "StartDate": "2000-01-03",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "680": {
  "Code": "SNDK",
  "Name": "SanDisk Corporation",
  "StartDate": "2000-01-03",
  "EndDate": "2016-05-13",
  "IsActiveNow": 0,
  "IsDelisted": 1
  },
  "681": {
  "Code": "SNI",
  "Name": "Scripps Networks Interactive",
  "StartDate": "2008-07-01",
  "EndDate": "2018-03-07",
  "IsActiveNow": 0,
  "IsDelisted": 1
  },
  "682": {
  "Code": "SNPS",
  "Name": "Synopsys Inc.",
  "StartDate": "2017-03-16",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "683": {
  "Code": "SO",
  "Name": "Southern Company",
  "StartDate": "2000-01-03",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "684": {
  "Code": "SPG",
  "Name": "Simon Property Group Inc",
  "StartDate": "2002-06-26",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "685": {
  "Code": "SPGI",
  "Name": "S&P Global, Inc.",
  "StartDate": "2007-04-27",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "686": {
  "Code": "SPLS",
  "Name": "Staples Inc.",
  "StartDate": "2000-01-03",
  "EndDate": "2017-09-18",
  "IsActiveNow": 0,
  "IsDelisted": 1
  },
  "687": {
  "Code": "SRCL",
  "Name": "Stericycle",
  "StartDate": "2000-01-03",
  "EndDate": "2018-12-03",
  "IsActiveNow": 0,
  "IsDelisted": 0
  },
  "688": {
  "Code": "SRE",
  "Name": "Sempra Energy",
  "StartDate": "2000-01-03",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "689": {
  "Code": "STE",
  "Name": "STERIS plc\t",
  "StartDate": "2019-12-23",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "690": {
  "Code": "STI",
  "Name": "SunTrust Banks",
  "StartDate": "2000-01-03",
  "EndDate": "2019-12-09",
  "IsActiveNow": 0,
  "IsDelisted": 1
  },
  "691": {
  "Code": "STJ",
  "Name": "St. Jude Medical",
  "StartDate": "2000-01-03",
  "EndDate": "2017-01-05",
  "IsActiveNow": 0,
  "IsDelisted": 1
  },
  "692": {
  "Code": "STR",
  "Name": "Questar Corp.",
  "StartDate": "2000-01-03",
  "EndDate": "2010-06-30",
  "IsActiveNow": 0,
  "IsDelisted": 1
  },
  "693": {
  "Code": "STT",
  "Name": "State Street Corp.",
  "StartDate": "2000-01-03",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "694": {
  "Code": "STX",
  "Name": "Seagate Technology",
  "StartDate": "2012-07-02",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "695": {
  "Code": "STZ",
  "Name": "Constellation Brands",
  "StartDate": "2005-07-01",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "696": {
  "Code": "SUN",
  "Name": "Sunoco Inc.",
  "StartDate": "2000-01-03",
  "EndDate": "2012-10-10",
  "IsActiveNow": 0,
  "IsDelisted": 0
  },
  "697": {
  "Code": "SUNE",
  "Name": "SunEdison",
  "StartDate": "2000-01-03",
  "EndDate": "2016-04-20",
  "IsActiveNow": 0,
  "IsDelisted": 1
  },
  "698": {
  "Code": "SVU",
  "Name": "Supervalu Inc.",
  "StartDate": "2000-01-03",
  "EndDate": "2012-04-23",
  "IsActiveNow": 0,
  "IsDelisted": 1
  },
  "699": {
  "Code": "SWK",
  "Name": "Stanley Black & Decker",
  "StartDate": "2000-01-03",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "700": {
  "Code": "SWKS",
  "Name": "Skyworks Solutions",
  "StartDate": "2015-03-12",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "701": {
  "Code": "SWN",
  "Name": "Southwestern Energy\t",
  "StartDate": "2000-01-03",
  "EndDate": "2017-04-04",
  "IsActiveNow": 0,
  "IsDelisted": 0
  },
  "702": {
  "Code": "SWY",
  "Name": "Safeway Inc",
  "StartDate": "2000-01-03",
  "EndDate": "2015-01-27",
  "IsActiveNow": 0,
  "IsDelisted": 1
  },
  "703": {
  "Code": "SYF",
  "Name": "Synchrony Financial",
  "StartDate": "2015-11-18",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "704": {
  "Code": "SYK",
  "Name": "Stryker Corp.",
  "StartDate": "2000-12-12",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "705": {
  "Code": "SYMC",
  "Name": "Symantec Corp.",
  "StartDate": "2018-01-02",
  "EndDate": "2019-11-04",
  "IsActiveNow": 0,
  "IsDelisted": 1
  },
  "706": {
  "Code": "SYY",
  "Name": "Sysco Corp.",
  "StartDate": "2000-01-03",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "707": {
  "Code": "T",
  "Name": "AT&T Inc.\t",
  "StartDate": "2000-01-03",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "708": {
  "Code": "TAP",
  "Name": "Molson Coors Brewing Company",
  "StartDate": "2000-01-03",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "709": {
  "Code": "TDC",
  "Name": "Teradata Corp.",
  "StartDate": "2007-10-01",
  "EndDate": "2017-06-19",
  "IsActiveNow": 0,
  "IsDelisted": 0
  },
  "710": {
  "Code": "TDG",
  "Name": "TransDigm Group",
  "StartDate": "2016-06-03",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "711": {
  "Code": "TDY",
  "Name": "Teledyne Technologies",
  "StartDate": "2020-06-22",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "712": {
  "Code": "TE",
  "Name": "TECO Energy",
  "StartDate": "2000-01-03",
  "EndDate": "2016-07-01",
  "IsActiveNow": 0,
  "IsDelisted": 1
  },
  "713": {
  "Code": "TEG",
  "Name": "Integrys Energy Group Inc.",
  "StartDate": "2007-02-22",
  "EndDate": "2015-07-01",
  "IsActiveNow": 0,
  "IsDelisted": 1
  },
  "714": {
  "Code": "TEL",
  "Name": "TE Connectivity Ltd.",
  "StartDate": "2011-10-14",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "715": {
  "Code": "TER",
  "Name": "Teradyne",
  "StartDate": "2000-01-03",
  "EndDate": "2013-12-23",
  "IsActiveNow": 0,
  "IsDelisted": 0
  },
  "716": {
  "Code": "TEVA",
  "Name": "Teva Pharmaceutical Industries Ltd.",
  "StartDate": "2000-01-03",
  "EndDate": "2020-07-19",
  "IsActiveNow": 0,
  "IsDelisted": 0
  },
  "717": {
  "Code": "TFC",
  "Name": "Truist Financial",
  "StartDate": "2000-01-03",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "718": {
  "Code": "TFX",
  "Name": "Teleflex",
  "StartDate": "2019-01-18",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "719": {
  "Code": "TGNA",
  "Name": "Tegna, Inc.",
  "StartDate": "2000-01-03",
  "EndDate": "2017-06-02",
  "IsActiveNow": 0,
  "IsDelisted": 0
  },
  "720": {
  "Code": "TGT",
  "Name": "Target Corp.",
  "StartDate": "2000-01-31",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "721": {
  "Code": "THC",
  "Name": "Tenet Healthcare",
  "StartDate": "2000-01-03",
  "EndDate": "2016-04-18",
  "IsActiveNow": 0,
  "IsDelisted": 0
  },
  "722": {
  "Code": "TIE",
  "Name": "Titanium Metals",
  "StartDate": "2000-01-03",
  "EndDate": "2012-12-21",
  "IsActiveNow": 0,
  "IsDelisted": 1
  },
  "723": {
  "Code": "TIF",
  "Name": "Tiffany & Co.",
  "StartDate": "2000-06-21",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "724": {
  "Code": "TJX",
  "Name": "TJX Companies Inc.",
  "StartDate": "2000-01-03",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "725": {
  "Code": "TLAB",
  "Name": "Tellabs Inc.",
  "StartDate": "2000-01-03",
  "EndDate": "2011-12-20",
  "IsActiveNow": 0,
  "IsDelisted": 1
  },
  "726": {
  "Code": "TMK",
  "Name": "Torchmark Corp.",
  "StartDate": "2000-01-03",
  "EndDate": "2019-08-08",
  "IsActiveNow": 0,
  "IsDelisted": 1
  },
  "727": {
  "Code": "TMO",
  "Name": "Thermo Fisher Scientific",
  "StartDate": "2000-01-03",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "728": {
  "Code": "TMUS",
  "Name": "T-Mobile US",
  "StartDate": "2019-07-15",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "729": {
  "Code": "TPR",
  "Name": "Tapestry, Inc.",
  "StartDate": "2004-02-02",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "730": {
  "Code": "TRB",
  "Name": "Tribune Co.",
  "StartDate": "2000-01-03",
  "EndDate": "2007-12-20",
  "IsActiveNow": 0,
  "IsDelisted": 1
  },
  "731": {
  "Code": "TRIP",
  "Name": "TripAdvisor",
  "StartDate": "2011-12-20",
  "EndDate": "2019-12-23",
  "IsActiveNow": 0,
  "IsDelisted": 0
  },
  "732": {
  "Code": "TROW",
  "Name": "T. Rowe Price Group",
  "StartDate": "2000-01-03",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "733": {
  "Code": "TRV",
  "Name": "The Travelers Companies Inc.",
  "StartDate": "2002-08-21",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "734": {
  "Code": "TSCO",
  "Name": "Tractor Supply Company",
  "StartDate": "2014-01-24",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "735": {
  "Code": "TSG",
  "Name": "Sabre Holdings",
  "StartDate": "2000-01-03",
  "EndDate": "2007-03-30",
  "IsActiveNow": 0,
  "IsDelisted": 1
  },
  "736": {
  "Code": "TSLA",
  "Name": "Tesla Inc",
  "StartDate": "2010-06-29",
  "EndDate": "2020-07-19",
  "IsActiveNow": 0,
  "IsDelisted": 0
  },
  "737": {
  "Code": "TSN",
  "Name": "Tyson Foods",
  "StartDate": "2000-01-03",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "738": {
  "Code": "TSO",
  "Name": "Tesoro Corporation",
  "StartDate": "2007-09-27",
  "EndDate": "2017-07-31",
  "IsActiveNow": 0,
  "IsDelisted": 1
  },
  "739": {
  "Code": "TSS",
  "Name": "TSYS",
  "StartDate": "2000-01-03",
  "EndDate": "2019-09-23",
  "IsActiveNow": 0,
  "IsDelisted": 1
  },
  "740": {
  "Code": "TT",
  "Name": "Trane Technologies plc",
  "StartDate": "2010-11-17",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "741": {
  "Code": "TTWO",
  "Name": "Take-Two Interactive\t",
  "StartDate": "2018-03-19",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "742": {
  "Code": "TWC",
  "Name": "Time Warner Cable",
  "StartDate": "2007-03-01",
  "EndDate": "2016-05-18",
  "IsActiveNow": 0,
  "IsDelisted": 1
  },
  "743": {
  "Code": "TWTR",
  "Name": "Twitter, Inc.",
  "StartDate": "2018-06-07",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "744": {
  "Code": "TWX",
  "Name": "Time Warner",
  "StartDate": "2000-01-03",
  "EndDate": "2018-06-20",
  "IsActiveNow": 0,
  "IsDelisted": 1
  },
  "745": {
  "Code": "TXN",
  "Name": "Texas Instruments",
  "StartDate": "2000-01-03",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "746": {
  "Code": "TXT",
  "Name": "Textron Inc.",
  "StartDate": "2000-01-03",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "747": {
  "Code": "TYL",
  "Name": "Tyler Technologies",
  "StartDate": "2020-06-22",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "748": {
  "Code": "UA",
  "Name": "Under Armour (Class C)",
  "StartDate": "2014-05-01",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "749": {
  "Code": "UAA",
  "Name": "Under Armour (Class A)",
  "StartDate": "2014-05-01",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "750": {
  "Code": "UAL",
  "Name": "United Airlines Holdings",
  "StartDate": "2015-09-03",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "751": {
  "Code": "UDR",
  "Name": "UDR, Inc.",
  "StartDate": "2016-03-07",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "752": {
  "Code": "UHS",
  "Name": "Universal Health Services, Inc.",
  "StartDate": "2014-09-20",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "753": {
  "Code": "ULTA",
  "Name": "Ulta Beauty",
  "StartDate": "2016-04-18",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "754": {
  "Code": "UNH",
  "Name": "United Health Group Inc.",
  "StartDate": "2000-01-03",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "755": {
  "Code": "UNM",
  "Name": "Unum Group",
  "StartDate": "2000-01-03",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "756": {
  "Code": "UNP",
  "Name": "Union Pacific Corp",
  "StartDate": "2000-01-03",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "757": {
  "Code": "UPS",
  "Name": "United Parcel Service",
  "StartDate": "2002-07-22",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "758": {
  "Code": "URBN",
  "Name": "Urban Outfitters",
  "StartDate": "2000-01-03",
  "EndDate": "2017-03-20",
  "IsActiveNow": 0,
  "IsDelisted": 0
  },
  "759": {
  "Code": "URI",
  "Name": "United Rentals",
  "StartDate": "2014-09-20",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "760": {
  "Code": "USB",
  "Name": "U.S. Bancorp",
  "StartDate": "2004-02-02",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "761": {
  "Code": "UTX",
  "Name": "United Technologies",
  "StartDate": "2000-01-03",
  "EndDate": "2020-04-02",
  "IsActiveNow": 0,
  "IsDelisted": 1
  },
  "762": {
  "Code": "V",
  "Name": "Visa Inc.",
  "StartDate": "2009-12-21",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "763": {
  "Code": "VAR",
  "Name": "Varian Medical Systems",
  "StartDate": "2007-02-12",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "764": {
  "Code": "VFC",
  "Name": "V.F. Corp.",
  "StartDate": "2000-01-03",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "765": {
  "Code": "VIAB",
  "Name": "Viacom",
  "StartDate": "2005-12-05",
  "EndDate": "2019-12-05",
  "IsActiveNow": 0,
  "IsDelisted": 1
  },
  "766": {
  "Code": "VIAC",
  "Name": "ViacomCBS",
  "StartDate": "2019-12-05",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "767": {
  "Code": "VIAV",
  "Name": "Viavi Solutions Inc.",
  "StartDate": "2000-01-03",
  "EndDate": "2020-07-19",
  "IsActiveNow": 0,
  "IsDelisted": 0
  },
  "768": {
  "Code": "VIP",
  "Name": "Vimpelcom Ltd.",
  "StartDate": "2000-01-03",
  "EndDate": "2017-03-30",
  "IsActiveNow": 0,
  "IsDelisted": 1
  },
  "769": {
  "Code": "VLO",
  "Name": "Valero Energy",
  "StartDate": "2000-01-03",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "770": {
  "Code": "VMC",
  "Name": "Vulcan Materials",
  "StartDate": "2000-01-03",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "771": {
  "Code": "VMED",
  "Name": "Virgin Media Inc.",
  "StartDate": "2007-02-08",
  "EndDate": "2013-06-07",
  "IsActiveNow": 0,
  "IsDelisted": 1
  },
  "772": {
  "Code": "VNO",
  "Name": "Vornado Realty Trust\t",
  "StartDate": "2000-01-03",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "773": {
  "Code": "VOD",
  "Name": "Vodafone Group Plc",
  "StartDate": "2000-01-03",
  "EndDate": "2020-07-19",
  "IsActiveNow": 0,
  "IsDelisted": 0
  },
  "774": {
  "Code": "VRSK",
  "Name": "Verisk Analytics",
  "StartDate": "2015-10-08",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "775": {
  "Code": "VRSN",
  "Name": "Verisign Inc.",
  "StartDate": "2006-02-01",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "776": {
  "Code": "VRTX",
  "Name": "Vertex Pharmaceuticals Inc",
  "StartDate": "2013-09-23",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "777": {
  "Code": "VTR",
  "Name": "Ventas Inc",
  "StartDate": "2009-03-04",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "778": {
  "Code": "VZ",
  "Name": "Verizon Communications",
  "StartDate": "2000-07-03",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "779": {
  "Code": "WAB",
  "Name": "Wabtec Corporation",
  "StartDate": "2019-02-27",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "780": {
  "Code": "WAT",
  "Name": "Waters Corporation",
  "StartDate": "2000-01-03",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "781": {
  "Code": "WB",
  "Name": "Wachovia Bank",
  "StartDate": "2000-01-03",
  "EndDate": "2008-12-31",
  "IsActiveNow": 0,
  "IsDelisted": 0
  },
  "782": {
  "Code": "WBA",
  "Name": "Walgreens Boots Alliance",
  "StartDate": "2000-01-03",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "783": {
  "Code": "WCG",
  "Name": "WellCare",
  "StartDate": "2018-09-14",
  "EndDate": "2020-01-28",
  "IsActiveNow": 0,
  "IsDelisted": 1
  },
  "784": {
  "Code": "WCRX",
  "Name": "Warner Chilcott plc",
  "StartDate": "2006-09-21",
  "EndDate": "2013-09-27",
  "IsActiveNow": 0,
  "IsDelisted": 1
  },
  "785": {
  "Code": "WDC",
  "Name": "Western Digital",
  "StartDate": "2009-07-01",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "786": {
  "Code": "WEC",
  "Name": "WEC Energy Group",
  "StartDate": "2008-10-31",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "787": {
  "Code": "WELL",
  "Name": "Welltower Inc.",
  "StartDate": "2009-01-30",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "788": {
  "Code": "WFC",
  "Name": "Wells Fargo",
  "StartDate": "2000-01-03",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "789": {
  "Code": "WFM",
  "Name": "Whole Foods Market",
  "StartDate": "2000-01-03",
  "EndDate": "2017-08-29",
  "IsActiveNow": 0,
  "IsDelisted": 1
  },
  "790": {
  "Code": "WFR",
  "Name": "MEMC Electronic Materials Inc.",
  "StartDate": "2000-01-03",
  "EndDate": "2011-12-16",
  "IsActiveNow": 0,
  "IsDelisted": 1
  },
  "791": {
  "Code": "WHR",
  "Name": "Whirlpool Corp.",
  "StartDate": "2000-01-03",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "792": {
  "Code": "WIN",
  "Name": "Windstream Holdings Inc",
  "StartDate": "2006-07-18",
  "EndDate": "2015-04-07",
  "IsActiveNow": 0,
  "IsDelisted": 1
  },
  "793": {
  "Code": "WLTW",
  "Name": "Willis Towers Watson",
  "StartDate": "2016-01-05",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "794": {
  "Code": "WM",
  "Name": "Waste Management Inc.",
  "StartDate": "2000-01-03",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "795": {
  "Code": "WMB",
  "Name": "Williams Cos.",
  "StartDate": "2000-01-03",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "796": {
  "Code": "WMT",
  "Name": "Walmart",
  "StartDate": "2000-01-03",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "797": {
  "Code": "WPX",
  "Name": "WPX Energy, Inc.",
  "StartDate": "2012-01-03",
  "EndDate": "2014-03-21",
  "IsActiveNow": 0,
  "IsDelisted": 0
  },
  "798": {
  "Code": "WRB",
  "Name": "W. R. Berkley Corporation",
  "StartDate": "2019-12-05",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "799": {
  "Code": "WRK",
  "Name": "WestRock",
  "StartDate": "2015-06-24",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "800": {
  "Code": "WST",
  "Name": "West Pharmaceutical Services",
  "StartDate": "2020-05-22",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "801": {
  "Code": "WU",
  "Name": "Western Union Co",
  "StartDate": "2006-10-02",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "802": {
  "Code": "WY",
  "Name": "Weyerhaeuser",
  "StartDate": "2000-01-03",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "803": {
  "Code": "WYN",
  "Name": "Wyndham Worldwide Corp",
  "StartDate": "2006-08-01",
  "EndDate": "2018-05-31",
  "IsActiveNow": 0,
  "IsDelisted": 1
  },
  "804": {
  "Code": "WYNN",
  "Name": "Wynn Resorts Ltd",
  "StartDate": "2008-11-14",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "805": {
  "Code": "X",
  "Name": "United States Steel Corporation",
  "StartDate": "2000-01-03",
  "EndDate": "2014-07-02",
  "IsActiveNow": 0,
  "IsDelisted": 0
  },
  "806": {
  "Code": "XEC",
  "Name": "Cimarex Energy",
  "StartDate": "2014-06-20",
  "EndDate": "2020-03-03",
  "IsActiveNow": 0,
  "IsDelisted": 0
  },
  "807": {
  "Code": "XEL",
  "Name": "Xcel Energy Inc",
  "StartDate": "2000-08-21",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "808": {
  "Code": "XL",
  "Name": "XL Group plc",
  "StartDate": "2000-01-03",
  "EndDate": "2018-09-11",
  "IsActiveNow": 0,
  "IsDelisted": 1
  },
  "809": {
  "Code": "XLNX",
  "Name": "Xilinx",
  "StartDate": "2000-01-03",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "810": {
  "Code": "XOM",
  "Name": "Exxon Mobil Corp.",
  "StartDate": "2000-01-03",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "811": {
  "Code": "XRAY",
  "Name": "Dentsply Sirona",
  "StartDate": "2008-11-14",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "812": {
  "Code": "XRX",
  "Name": "Xerox",
  "StartDate": "2000-01-03",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "813": {
  "Code": "XTO",
  "Name": "XTO Energy Inc.",
  "StartDate": "2000-01-03",
  "EndDate": "2010-06-28",
  "IsActiveNow": 0,
  "IsDelisted": 1
  },
  "814": {
  "Code": "XYL",
  "Name": "Xylem Inc.\t",
  "StartDate": "2011-11-01",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "815": {
  "Code": "YHOO",
  "Name": "Yahoo! Inc.",
  "StartDate": "2000-01-03",
  "EndDate": "2017-06-19",
  "IsActiveNow": 0,
  "IsDelisted": 1
  },
  "816": {
  "Code": "YUM",
  "Name": "Yum! Brands Inc",
  "StartDate": "2000-01-03",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "817": {
  "Code": "ZBH",
  "Name": "Zimmer Biomet Holdings",
  "StartDate": "2001-08-07",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "818": {
  "Code": "ZBRA",
  "Name": "Zebra Technologies",
  "StartDate": "2019-12-23",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "819": {
  "Code": "ZION",
  "Name": "Zions Bancorp",
  "StartDate": "2001-06-22",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  },
  "820": {
  "Code": "ZTS",
  "Name": "Zoetis",
  "StartDate": "2013-06-21",
  "EndDate": "2020-10-25",
  "IsActiveNow": 1,
  "IsDelisted": 0
  }
  }

  //function for checking the date:
  function checkDate(date1, date2) {
    newDate1 = date1.replace(/-/g, " ");
    ArrayDate1 = newDate1.split(" ").map(Number)
    //get second date and split into a new Array
    newDate2 = date2.replace(/-/g, " ");
    ArrayDate2 = newDate2.split(" ").map(Number);
  
    //compare the two by indices. Check if start date is before 3/31/2009
    //return false if date 1 comes after date 2. Return true if date 1 is before date2 or if the dates are equal.
    if (ArrayDate1[0] > ArrayDate2[0]) {
      return false;
    }
    else if(ArrayDate1[0] < ArrayDate2[0]) {
      return true;
    }
    else if((ArrayDate1[0] == ArrayDate2[0]) && (ArrayDate1[1] < ArrayDate2[1])) {
      return true;
    }
    else if((ArrayDate1[0] == ArrayDate2[0]) && (ArrayDate1[1] > ArrayDate2[1])) {
      return false;
    }
    else if((ArrayDate1[0] == ArrayDate2[0]) && (ArrayDate1[1] == ArrayDate2[1]) && (ArrayDate1[2] < ArrayDate2[2])) {
      return true;
    }
    else if((ArrayDate1[0] == ArrayDate2[0]) && (ArrayDate1[1] == ArrayDate2[1]) && (ArrayDate1[2] > ArrayDate2[2])) {
      return false;
    }
    else if((ArrayDate1[0] == ArrayDate2[0]) && (ArrayDate1[1] == ArrayDate2[1]) && (ArrayDate1[2] == ArrayDate2[2])) {
      return false;
    }
    else {
      console.log("There was an error comparing the following dates: " + ArrayDate1 + ", " + ArrayDate2);
    }
  
  
  }
  /*sort through the historical data in the JSON structure above. Retrieve only those stocks
  with start dates on or after the start of the period study which is 3/31/2009. Include only stocks with
  end dates on or before 4/1/2019. This should exclude any stocks starting after the end of the study period.
  Place all of these stocks into a final data object which will be the stocks considered in the study. */
  
  
  //for everything in the object: check if start date is on or before 3/31/2009:

FinalObject = [];
  Object.keys(HistoricalData).forEach(function(key) {
    console.log(key, HistoricalData[key].Code, HistoricalData[key].StartDate);
    //for each object: if end date is before 3/31/2009 we need to exclude that stock and include
    //the stock if the end is on or after that 3/31/2009 and the start date is before 3/31/2019.
    if (checkDate(HistoricalData[key].EndDate, "2009-3-31") == false && checkDate(HistoricalData[key].StartDate, "2019-4-01") == true) {
      //if end date is before 4/01/2019, include the stock and its information in the study.
      if (checkDate(HistoricalData[key].EndDate, "2019-4-01") == true) {
      //Create an object to put the stock information into and then load the information from the HistoricalData object
      testObject = {};
      testObject.Code = HistoricalData[key].Code;
      testObject.Name = HistoricalData[key].Name;
      testObject.StartDate = HistoricalData[key].StartDate;
      testObject.EndDate = HistoricalData[key].EndDate;
      testObject.IsActiveNow = HistoricalData[key].IsActiveNow;
      testObject.IsDelisted = HistoricalData[key].IsDelisted;
      console.log("End Date before 2019-4-01: " + HistoricalData[key].Code)
      
      //Push the stock object into the FinalObject array.
      FinalObject.push(testObject);
      }
      //if end date is on or after 4/01/2019, then do the same thing as above.
      if (checkDate(HistoricalData[key].EndDate, "2019-4-01") == false) {
        testObject = {};
        testObject.Code = HistoricalData[key].Code;
        testObject.Name = HistoricalData[key].Name;
        testObject.StartDate = HistoricalData[key].StartDate;
        testObject.EndDate = HistoricalData[key].EndDate;
        testObject.IsActiveNow = HistoricalData[key].IsActiveNow;
        testObject.IsDelisted = HistoricalData[key].IsDelisted;
        console.log("End Date on or after 2009-4-01: " + HistoricalData[key].Code)
        FinalObject.push(testObject);
       }
    }
  });
  console.log({...FinalObject});
  let ArrayLength = FinalObject.length;
  console.log(ArrayLength);
  //Write the contents of the object into a file of type json
  fs.writeFile('testFile6.json', JSON.stringify(FinalObject), err => {
    if (err) {
      console.error(err)
      return
    }
  });
  