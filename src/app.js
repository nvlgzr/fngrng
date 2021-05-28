const app = () => {
	/* START layoutInfo.js inlined */
	var alphabet = "abcdefghijklmnopqrstuvwxyz";

	const levelDictionaries = {
		azerty: {
			'lvl1': 'qsdfjklm',
			'lvl2': 'gh',
			'lvl3': 'azer',
			'lvl4': 'tycv',
			'lvl5': 'uiop',
			'lvl6': 'wxbn',
			'lvl7': alphabet,
		},
		dvorak: {
			'lvl1': 'aoeuhtns',
			'lvl2': 'id',
			'lvl3': 'pyfg',
			'lvl4': 'kxbm',
			'lvl5': 'crlw',
			'lvl6': 'qjvz',
			'lvl7': alphabet,
		},
		colemak: {
			'lvl1': 'arstneio',
			'lvl2': 'dh',
			'lvl3': 'pgjl',
			'lvl4': 'cvbk',
			'lvl5': 'wfuy',
			'lvl6': 'qzxm',
			'lvl7': alphabet,
		},
		colemakdh: {
			'lvl1': 'arstneio',
			'lvl2': 'dh',
			'lvl3': 'wfyu',
			'lvl4': 'plgm',
			'lvl5': 'bcvk',
			'lvl6': 'qxjz',
			'lvl7': alphabet,
		},
		lefthandeddvorak: {
			'lvl1': 'dtheac',
			'lvl2': 'yurso',
			'lvl3': 'gvwni',
			'lvl4': 'mljc',
			'lvl5': 'qbkx',
			'lvl6': 'pfz',
			'lvl7': alphabet,
		},
		qwerty: {
			'lvl1': 'asdfer',
			'lvl2': 'jkliuo',
			'lvl3': 'ghty',
			'lvl4': 'qwzx',
			'lvl5': 'nmp',
			'lvl6': 'cvb',
			'lvl7': alphabet,
		},
		tarmak: {
			'lvl1': 'arstneio',
			'lvl2': 'dh',
			'lvl3': 'gjvb',
			'lvl4': 'qwfp',
			'lvl5': 'luyz',
			'lvl6': 'cxkm',
			'lvl7': alphabet,
		},
		workman: {
			'lvl1': 'ashtneoi',
			'lvl2': 'gy',
			'lvl3': 'bjfu',
			'lvl4': 'mcvk',
			'lvl5': 'plzx',
			'lvl6': 'qdrw',
			'lvl7': alphabet,
		},
		custom: {
			'lvl1': '',
			'lvl2': '',
			'lvl3': '',
			'lvl4': '',
			'lvl5': '',
			'lvl6': '',
			'lvl7': alphabet,
		},

	}

	var layoutMaps = {
		azerty: {
			'Minus': ")",
			'Equal': "=",
			'KeyQ': "a",
			'KeyW': 'z',
			'KeyE': 'e',
			'KeyR': 'r',
			'KeyT': 't',
			'KeyY': 'y',
			'KeyU': 'u',
			'KeyI': 'i',
			'KeyO': 'o',
			'KeyP': 'p',
			'BracketLeft': '^',
			'BracketRight': '$',
			'Backslash': '\\',
			'KeyA': 'q',
			'KeyS': 's',
			'KeyD': 'd',
			'KeyF': 'f',
			'KeyG': 'g',
			'KeyH': 'h',
			'KeyJ': 'j',
			'KeyK': 'k',
			'KeyL': 'l',
			'Semicolon': 'm',
			'Quote': "ù",
			'KeyZ': '<',
			'KeyX': 'w',
			'KeyC': 'x',
			'KeyV': 'c',
			'KeyB': 'v',
			'KeyN': 'b',
			'KeyM': 'n',
			'Comma': '.',
			'Period': ';',
			'Slash': '!',
			'shiftLayer': 'default',
		},
		dvorak: {
			'Minus': "[",
			'Equal': "]",
			'KeyQ': "'",
			'KeyW': ',',
			'KeyE': '.',
			'KeyR': 'p',
			'KeyT': 'y',
			'KeyY': 'f',
			'KeyU': 'g',
			'KeyI': 'c',
			'KeyO': 'r',
			'KeyP': 'l',
			'BracketLeft': '/',
			'BracketRight': '=',
			'Backslash': '\\',
			'KeyA': 'a',
			'KeyS': 'o',
			'KeyD': 'e',
			'KeyF': 'u',
			'KeyG': 'i',
			'KeyH': 'd',
			'KeyJ': 'h',
			'KeyK': 't',
			'KeyL': 'n',
			'Semicolon': 's',
			'Quote': '-',
			'KeyZ': ';',
			'KeyX': 'q',
			'KeyC': 'j',
			'KeyV': 'k',
			'KeyB': 'x',
			'KeyN': 'b',
			'KeyM': 'm',
			'Comma': 'w',
			'Period': 'v',
			'Slash': 'z',
			'Backquote': '`',
			'Digit1': '1',
			'Digit2': '2',
			'Digit3': '3',
			'shiftLayer': {
				'KeyQ': "\"",
				'KeyW': '<',
				'KeyE': '>',
				'KeyR': 'P',
				'KeyT': 'Y',
				'KeyY': 'F',
				'KeyU': 'G',
				'KeyI': 'C',
				'KeyO': 'R',
				'KeyP': 'L',
				'BracketLeft': '?',
				'KeyA': 'A',
				'KeyS': 'O',
				'KeyD': 'E',
				'KeyF': 'U',
				'KeyG': 'I',
				'KeyH': 'D',
				'KeyJ': 'H',
				'KeyK': 'T',
				'KeyL': 'N',
				'Semicolon': 'S',
				'KeyZ': ':',
				'KeyX': 'Q',
				'KeyC': 'J',
				'KeyV': 'K',
				'KeyB': 'X',
				'KeyN': 'B',
				'KeyM': 'M',
				'Comma': 'W',
				'Period': 'V',
				'Slash': 'Z',
				'Digit1': '!'
			}
		},
		colemak: {
			'Minus': "-",
			'Equal': "=",
			'KeyQ': "q",
			'KeyW': 'w',
			'KeyE': 'f',
			'KeyR': 'p',
			'KeyT': 'g',
			'KeyY': 'j',
			'KeyU': 'l',
			'KeyI': 'u',
			'KeyO': 'y',
			'KeyP': ';',
			'BracketLeft': '[',
			'BracketRight': ']',
			'Backslash': '\\',
			'KeyA': 'a',
			'KeyS': 'r',
			'KeyD': 's',
			'KeyF': 't',
			'KeyG': 'd',
			'KeyH': 'h',
			'KeyJ': 'n',
			'KeyK': 'e',
			'KeyL': 'i',
			'Semicolon': 'o',
			'Quote': "'",
			'KeyZ': 'z',
			'KeyX': 'x',
			'KeyC': 'c',
			'KeyV': 'v',
			'KeyB': 'b',
			'KeyN': 'k',
			'KeyM': 'm',
			'Comma': ',',
			'Period': '.',
			'Slash': '/',
			'shiftLayer': 'default',
		},
		colemakdh: {
			'Minus': "-",
			'Equal': "=",
			'KeyQ': "q",
			'KeyW': 'w',
			'KeyE': 'f',
			'KeyR': 'p',
			'KeyT': 'b',
			'KeyY': 'j',
			'KeyU': 'l',
			'KeyI': 'u',
			'KeyO': 'y',
			'KeyP': ';',
			'BracketLeft': '[',
			'BracketRight': ']',
			'Backslash': '\\',
			'KeyA': 'a',
			'KeyS': 'r',
			'KeyD': 's',
			'KeyF': 't',
			'KeyG': 'g',
			'KeyH': 'm',
			'KeyJ': 'n',
			'KeyK': 'e',
			'KeyL': 'i',
			'Semicolon': 'o',
			'Quote': "'",
			'KeyZ': 'x',
			'KeyX': 'c',
			'KeyC': 'd',
			'KeyV': 'v',
			'KeyB': 'z',
			'KeyN': 'k',
			'KeyM': 'h',
			'Comma': ',',
			'Period': '.',
			'Slash': '/',
			'shiftLayer': 'default',
		},
		lefthandeddvorak: {
			'Digit1': "[",
			'Digit2': "]",
			'Digit3': "/",
			'Digit4': "p",
			'Digit5': "f",
			'Digit6': "m",
			'Digit7': "l",
			'Digit8': "j",
			'Digit9': "4",
			'Digit0': "3",
			'Minus': "2",
			'Equal': "1",
			'KeyQ': ";",
			'KeyW': 'q',
			'KeyE': 'b',
			'KeyR': 'y',
			'KeyT': 'u',
			'KeyY': 'r',
			'KeyU': 's',
			'KeyI': 'o',
			'KeyO': '.',
			'KeyP': '6',
			'BracketLeft': '5',
			'BracketRight': '=',
			'Backslash': '\\',
			'KeyA': '-',
			'KeyS': 'k',
			'KeyD': 'c',
			'KeyF': 'd',
			'KeyG': 't',
			'KeyH': 'h',
			'KeyJ': 'e',
			'KeyK': 'a',
			'KeyL': 'z',
			'Semicolon': '8',
			'Quote': "7",
			'KeyZ': "'",
			'KeyX': 'x',
			'KeyC': 'g',
			'KeyV': 'v',
			'KeyB': 'w',
			'KeyN': 'n',
			'KeyM': 'i',
			'Comma': ',',
			'Period': '0',
			'Slash': '9',
			'shiftLayer': 'default',
		},
		tarmak: {
			'Minus': "1",
			'Equal': "=",
			'KeyQ': "q",
			'KeyW': 'w',
			'KeyE': 'f',
			'KeyR': 'p',
			'KeyT': 'g',
			'KeyY': 'j',
			'KeyU': 'l',
			'KeyI': 'u',
			'KeyO': 'y',
			'KeyP': ';',
			'BracketLeft': '[',
			'BracketRight': ']',
			'Backslash': '\\',
			'KeyA': 'a',
			'KeyS': 'r',
			'KeyD': 's',
			'KeyF': 't',
			'KeyG': 'd',
			'KeyH': 'h',
			'KeyJ': 'n',
			'KeyK': 'e',
			'KeyL': 'i',
			'Semicolon': 'o',
			'Quote': "'",
			'KeyZ': 'z',
			'KeyX': 'x',
			'KeyC': 'c',
			'KeyV': 'v',
			'KeyB': 'b',
			'KeyN': 'k',
			'KeyM': 'm',
			'Comma': ',',
			'Period': '.',
			'Slash': '/',
			'shiftLayer': 'default',
		},
		qwerty: {
			'Minus': "-",
			'Equal': "=",
			'KeyQ': "q",
			'KeyW': 'w',
			'KeyE': 'e',
			'KeyR': 'r',
			'KeyT': 't',
			'KeyY': 'y',
			'KeyU': 'u',
			'KeyI': 'i',
			'KeyO': 'o',
			'KeyP': 'p',
			'BracketLeft': '[',
			'BracketRight': ']',
			'Backslash': '\\',
			'KeyA': 'a',
			'KeyS': 's',
			'KeyD': 'd',
			'KeyF': 'f',
			'KeyG': 'g',
			'KeyH': 'h',
			'KeyJ': 'j',
			'KeyK': 'k',
			'KeyL': 'l',
			'Semicolon': ';',
			'Quote': "'",
			'KeyZ': 'z',
			'KeyX': 'x',
			'KeyC': 'c',
			'KeyV': 'v',
			'KeyB': 'b',
			'KeyN': 'n',
			'KeyM': 'm',
			'Comma': ',',
			'Period': '.',
			'Slash': '/',
			'shiftLayer': 'default',
		},
		workman: {
			'Minus': "-",
			'Equal': "=",
			'KeyQ': "q",
			'KeyW': 'd',
			'KeyE': 'r',
			'KeyR': 'w',
			'KeyT': 'b',
			'KeyY': 'j',
			'KeyU': 'f',
			'KeyI': 'u',
			'KeyO': 'p',
			'KeyP': ';',
			'BracketLeft': '[',
			'BracketRight': ']',
			'Backslash': '\\',
			'KeyA': 'a',
			'KeyS': 's',
			'KeyD': 'h',
			'KeyF': 't',
			'KeyG': 'g',
			'KeyH': 'y',
			'KeyJ': 'n',
			'KeyK': 'e',
			'KeyL': 'o',
			'Semicolon': 'i',
			'Quote': "'",
			'KeyZ': 'z',
			'KeyX': 'x',
			'KeyC': 'm',
			'KeyV': 'c',
			'KeyB': 'v',
			'KeyN': 'k',
			'KeyM': 'l',
			'Comma': ',',
			'Period': '.',
			'Slash': '/',
			'shiftLayer': 'default',
		},
		custom: {
			'Minus': " ",
			'Equal': " ",
			'KeyQ': " ",
			'KeyW': ' ',
			'KeyE': ' ',
			'KeyR': ' ',
			'KeyT': ' ',
			'KeyY': ' ',
			'KeyU': ' ',
			'KeyI': ' ',
			'KeyO': ' ',
			'KeyP': ' ',
			'BracketLeft': ' ',
			'BracketRight': ' ',
			'Backslash': ' ',
			'KeyA': ' ',
			'KeyS': ' ',
			'KeyD': ' ',
			'KeyF': ' ',
			'KeyG': ' ',
			'KeyH': ' ',
			'KeyJ': ' ',
			'KeyK': ' ',
			'KeyL': ' ',
			'Semicolon': ' ',
			'Quote': " ",
			'KeyZ': ' ',
			'KeyX': ' ',
			'KeyC': ' ',
			'KeyV': ' ',
			'KeyB': ' ',
			'KeyN': ' ',
			'KeyM': ' ',
			'Comma': ' ',
			'Period': ' ',
			'Slash': ' ',
			'shiftLayer': 'default',
		},
	}

	/* END layoutInfo.js inlined */

	/* START wordList.js inlined */
	var masterList = [
		'i', 'k', 'to', 'a', 'in', 'is', 'on', 'I', 'it', 'not', 'or', 'are', 'at', 'as', 'an', 'one', 'no', 'site', 'see', 'so', 'its', 'state', 'into', 're', 'set', 'store', 'internet', 'states', 'area', 'art', 'rate', 'sites', 'non', 'teen', 'too', 'estate', 'note', 'start', 'series', 'air', 'test', 'san', 'street', 'stores', 'rates', 'east', 'star', 'areas', 'interest', 'enter', 'net', 'stories', 'arts', 'et', 'error', 'sort', 'none', 'near', 'notes', 'seen', 'soon', 'season', 'teens', 'sat', 'sent', 'artist', 'asian', 'inn', 'reason', 'station', 'sea', 'anti', 'tree', 'ie', 'stars', 'est', 'son', 'senior', 'entire', 'Asia', 'artists', 'session', 'int', 'rest', 'sense', 'sets', 'rent', 'ten', 'na', 'attention', 'nation', 'resort', 'stone', 'tests', 'root', 'nor', 'Santa', 'interests', 'saint', 'rose', 'eastern', 'entries', 'errors', 'reasons', 'ones', 'Ontario', 'assistant', 'senate', 'stats', 'iron', 'ne', 'train', 'nations', 'es', 'Toronto', 'assets', 'assist', 'Tennessee', 'rare', 'rise', 'eat', 'seat', 'Ann', 'instant', 'tea', 'trees', 'easier', 'nine', 'interior', 'ratio', 'rain', 'onto', 'tennis', 'stress', 'stations', 'transit', 'noise', 'annotation', 'sister', 'Iran', 'starts', 'rear', 'sessions', 'Antonio', 'raise', 'sir', 'earn', 'resorts', 'insert', 'transition', 'sit', 'treat', 'Nasa', 'si', 'Anne', 'asset', 'sin', 'inner', 'tone', 'stereo', 'taste', 'ER', 'seats', 'era', 'ran', 'streets', 'sierra', 'inter', 'Sean', 'senator', 'ear', 'tie', 'nearest', 'Ross', 'toe', 'trans', 'ease', 'arena', 'sensor', 'roses', 'tones', 'sons', 'ta', 'orientation', 'assess', 'stones', 'roots', 'titans', 'AI', 'restoration', 'antenna', 'ion', 'seasons', 'terror', 'intro', 'ent', 'Aaron', 'intent', 'tee', 'entities', 'titten', 'tons', 'restore', 'resistant', 'ins', 'tin', 'terrorist', 'ties', 'rat', 'seniors', 'toner', 'nose', 'territories', 'sees', 'sisters', 'asin', 'reset', 'tri', 'noon', 'tan', 'starter', 'tears', 'oasis', 'retention', 'tire', 'strain', 'trainer', 'inns', 'easter', 'Estonia', 'nano', 'retain', 'rats', 'stat', 'ton', 'trains', 'arise', 'tries', 'intense', 'sensors', 'Reno', 'intention', 'tires', 'retro', 'RNA', 'arrest', 'roster', 'notion', 'soonest', 'ears', 'neo', 'trio', 'terrorists', 'ser', 'tension', 'tier', 'rotation', 'saints', 'tenant', 'tattoo', 'tar', 'retreat', 'estates', 'sie', 'satin', 'tent', 'interstate', 'sans', 'onion', 'sao', 'trainers', 'ant', 'eos', 'raises', 'sorts', 'ate', 'terrain', 'tear', 'nest', 'NATO', 'Stan', 'ratios', 'senators', 'intranet', 'assists', 'seas', 'enters', 'neon', 'notre', 'resist', 'insertion', 'the', 'and', 'that', 'this', 'has', 'other', 'do', 'he', 'their', 'there', 'his', 'here', 'these', 'than', 'date', 'had', 'data', 'her', 'add', 'then', 'she', 'order', 'read', 'need', 'said', 'does', 'did', 'send', 'those', 'address', 'three', 'end', 'north', 'another', 'thread', 'hot', 'standard', 'side', 'red', 'road', 'hard', 'needs', 'hand', 'id', 'share', 'added', 'head', 'radio', 'others', 'trade', 'edition', 'short', 'done', 'either', 'third', 'edit', 'heart', 'India', 'death', 'standards', 'oh', 'shoes', 'orders', 'ad', 'started', 'needed', 'inside', 'rather', 'addition', 'hi', 'ideas', 'editor', 'idea', 'earth', 'disease', 'hair', 'rated', 'horse', 'door', 'instead', 'Indian', 'ads', 'northern', 'hit', 'interested', 'reader', 'aid', 'host', 'hands', 'Ohio', 'dead', 'hear', 'hits', 'die', 'stand', 'heard', 'diet', 'sheet', 'shot', 'shirt', 'heat', 'dates', 'sorted', 'intended', 'hire', 'died', 'readers', 'shirts', 'tried', 'theatre', 'Indiana', 'ends', 'aids', 'stated', 'ended', 'destination', 'shared', 'theater', 'residents', 'noted', 'addresses', 'ahead', 'shares', 'dress', 'hide', 'indeed', 'dot', 'hidden', 'dna', 'ride', 'don', 'dinner', 'trends', 'irish', 'raised', 'hat', 'hosted', 'diseases', 'entered', 'dean', 'edited', 'treated', 'neither', 'tested', 'node', 'editors', 'threads', 'dish', 'ha', 'Sarah', 'hate', 'attend', 'dear', 'doors', 'ordered', 'shots', 'header', 'sheets', 'stands', 'Detroit', 'resident', 'threat', 'heads', 'stored', 'Indonesia', 'seed', 'desire', 'disorders', 'sides', 'disaster', 'honor', 'oriented', 'horror', 'shoe', 'sand', 'editions', 'addressed', 'horses', 'donate', 'thin', 'dose', 'destinations', 'ethernet', 'trend', 'desert', 'desired', 'dad', 'roads', 'radar', 'donations', 'radiation', 'adds', 'throat', 'indoor', 'tend', 'tradition', 'Thai', 'den', 'trained', 'shorts', 'ah', 'odds', 'insider', 'hearts', 'reads', 'rod', 'sad', 'dated', 'shoot', 'shore', 'earned', 'disorder', 'herein', 'hero', 'attended', 'hosts', 'reed', 'odd', 'aside', 'additions', 'hats', 'Sharon', 'denied', 'donation', 'deaths', 'nodes', 'seeds', 'tired', 'stood', 'honest', 'headset', 'hood', 'Athens', 'northeast', 'retired', 'heroes', 'dos', 'thesis', 'Todd', 'headed', 'deer', 'danish', 'sender', 'threats', 'teeth', 'tied', 'hon', 'theaters', 'threaded', 'assisted', 'indians', 'heather', 'arrested', 'assessed', 'rider', 'harder', 'ash', 'tender', 'theories', 'dresses', 'arthritis', 'thee', 'hottest', 'hints', 'raid', 'dirt', 'dist', 'handed', 'headers', 'horn', 'Eddie', 'doe', 'Trinidad', 'dishes', 'trades', 'rid', 'honors', 'indie', 'initiated', 'dies', 'traditions', 'sends', 'hart', 'threatened', 'donor', 'trash', 'shade', 'inherited', 'hose', 'Diana', 'retained', 'shed', 'tide', 'sheer', 'eh', 'dare', 'hired', 'Nathan', 'rides', 'drain', 'strand', 'dash', 'dried', 'shorter', 'dressed', 'trader', 'intend', 'restored', 'hint', 'riders', 'rendered', 'annotated', 'shine', 'radios', 'Eden', 'distant', 'reid', 'hash', 'dentists', 'heated', 'inserted', 'donors', 'tooth', 'endorsed', 'heater', 'nested', 'render', 'dense', 'dat', 'shades', 'donated', 'redhead', 'ids', 'theta', 'of', 'for', 'all', 'us', 'if', 'free', 'our', 'up', 'out', 'use', 'also', 'help', 'online', 'first', 'find', 'top', 'people', 'list', 'health', 'used', 'last', 'should', 'post', 'please', 'support', 'after', 'info', 'user', 'under', 'full', 'life', 'part', 'united', 'hotel', 'real', 'international', 'report', 'off', 'details', 'line', 'hotels', 'results', 'national', 'posted', 'phone', 'file', 'open', 'south', 'found', 'sports', 'house', 'related', 'photo', 'total', 'per', 'posts', 'personal', 'shop', 'USA', 'return', 'students', 'profile', 'old', 'hours', 'title', 'shall', 'still', 'little', 'tools', 'food', 'author', 'different', 'press', 'learn', 'sale', 'around', 'print', 'point', 'sales', 'left', 'photos', 'features', 'plan', 'la', 'friend', 'staff', 'issues', 'April', 'users', 'person', 'less', 'student', 'let', 'offers', 'sell', 'options', 'field', 'paper', 'additional', 'latest', 'four', 'status', 'issue', 'seller', 'result', 'audio', 'offer', 'files', 'release', 'professional', 'future', 'sun', 'London', 'listed', 'run', 'popular', 'put', 'reports', 'president', 'until', 'self', 'Australia', 'least', 'friends', 'sure', 'tell', 'further', 'updated', 'fun', 'studies', 'lot', 'solutions', 'past', 'natural', 'due', 'upon', 'period', 'land', 'pro', 'island', 'url', 'front', 'update', 'parts', 'sound', 'present', 'federal', 'rules', 'final', 'adult', 'else', 'Europe', 'tips', 'plus', 'auto', 'fast', 'unit', 'far', 'often', 'feel', 'deals', 'points', 'loan', 'position', 'half', 'step', 'annual', 'later', 'response', 'fire', 'speed', 'loss', 'oil', 'stuff', 'loans', 'nature', 'turn', 'european', 'port', 'stop', 'supplies', 'institute', 'plans', 'sponsored', 'lines', 'held', 'printer', 'lost', 'tour', 'hope', 'solution', 'role', 'union', 'fine', 'hour', 'islands', 'rental', 'pre', 'sellers', 'opportunities', 'appropriate', 'returns', 'flash', 'lead', 'airport', 'outside', 'furniture', 'letter', 'phones', 'fund', 'releases', 'super', 'industrial', 'potential', 'late', 'fall', 'featured', 'tool', 'foundation', 'purpose', 'feature', 'independent', 'ip', 'hill', 'deal', 'hold', 'tue', 'safe', 'prior', 'telephone', 'sport', 'feed', 'population', 'pa', 'operations', 'therefore', 'round', 'understand', 'option', 'rentals', 'hall', 'parents', 'transfer', 'properties', 'hospital', 'ship', 'paid', 'peter', 'ensure', 'thus', 'partners', 'operation', 'patients', 'restaurants', 'lists', 'retail', 'useful', 'rule', 'told', 'input', 'feet', 'trial', 'units', 'enterprise', 'ships', 'fitness', 'opinion', 'uses', 'output', 'funds', 'resolution', 'pass', 'relations', 'trust', 'fees', 'pop', 'filter', 'panel', 'floor', 'proposed', 'default', 'outdoor', 'deep', 'protein', 'plant', 'reported', 'transportation', 'pool', 'partner', 'authors', 'parties', 'fish', 'released', 'internal', 'unless', 'detailed', 'Spain', 'southern', 'pressure', 'purposes', 'itself', 'defined', 'papers', 'fee', 'studio', 'apple', 'offered', 'repair', 'fair', 'steel', 'updates', 'Paris', 'fat', 'father', 'restaurant', 'trip', 'pst', 'poor', 'relationship', 'traditional', 'lord', 'led', 'fan', 'transport', 'presented', 'flat', 'literature', 'parent', 'spanish', 'helpful', 'definition', 'path', 'australian', 'detail', 'pet', 'russian', 'titles', 'applied', 'installation', 'suite', 'lee', 'lots', 'older', 'Illinois', 'fashion', 'forest', 'listen', 'sold', 'situation', 'appear', 'leather', 'patient', 'perhaps', 'persons', 'satellite', 'fit', 'pain', 'oral', 'ford', 'poster', 'replies', 'initial', 'optional', 'effort', 'phase', 'fields', 'letters', 'professor', 'install', 'apparel', 'foot', 'dollars', 'leader', 'soft', 'alone', 'fuel', 'italian', 'supported', 'fresh', 'thousands', 'upper', 'serious', 'steps', 'shops', 'efforts', 'essential', 'tours', 'load', 'affiliate', 'defense', 'drop', 'solid', 'presentation', 'spirit', 'affairs', 'affiliates', 'latin', 'separate', 'leadership', 'define', 'plants', 'faith', 'truth', 'failure', 'dollar', 'fill', 'draft', 'profit', 'leaders', 'posters', 'institutions', 'headlines', 'Russia', 'Seattle', 'fort', 'turned', 'returned', 'pattern', 'laser', 'earlier', 'sponsor', 'delete', 'issued', 'felt', 'personnel', 'passed', 'supplied', 'identified', 'falls', 'soul', 'opinions', 'professionals', 'appears', 'hello', 'adults', 'prepared', 'alert', 'installed', 'handle', 'depth', 'laptop', 'spa', 'feeds', 'faster', 'ups', 'route', 'residential', 'industries', 'partnership', 'editorial', 'rural', 'sounds', 'tape', 'null', 'filed', 'Netherlands', 'failed', 'roll', 'leads', 'translation', 'font', 'proposal', 'Philadelphia', 'portal', 'fail', 'profiles', 'houses', 'postal', 'relationships', 'finish', 'spent', 'helps', 'dual', 'sleep', 'hunter', 'fans', 'dell', 'portfolio', 'intel', 'utilities', 'referred', 'supports', 'nutrition', 'toll', 'tip', 'ladies', 'Austria', 'despite', 'proper', 'enterprises', 'delta', 'fear', 'alpha', 'appeal', 'household', 'positions', 'dealer', 'Utah', 'happen', 'refer', 'outdoors', 'printed', 'hip', 'printers', 'spot', 'prints', 'spend', 'suites', 'serial', 'relief', 'planet', 'proof', 'diff', 'hole', 'pets', 'represent', 'pair', 'ideal', 'finished', 'runs', 'patterns', 'hills', 'fourth', 'shape', 'euro', 'operator', 'suppliers', 'salt', 'preparation', 'pin', 'happened', 'sharp', 'lane', 'personals', 'spread', 'institution', 'dealers', 'plate', 'lose', 'soil', 'responses', 'sponsors', 'respond', 'plain', 'trail', 'setup', 'poll', 'filled', 'portion', 'supplier', 'authorities', 'dental', 'leisure', 'learned', 'opened', 'adopted', 'linear', 'hop', 'portland', 'pure', 'lessons', 'fruit', 'lens', 'alerts', 'offline', 'safari', 'relation', 'slide', 'adapter', 'laptops', 'presents', 'ref', 'dolls', 'paint', 'pilot', 'outlet', 'pan', 'ultra', 'episode', 'potter', 'epinions', 'patent', 'slot', 'planned', 'loop', 'foods', 'orleans', 'NFL', 'prepare', 'hundreds', 'helped', 'audit', 'push', 'polls', 'shell', 'solar', 'finder', 'periods', 'forth', 'happens', 'split', 'lo', 'spiritual', 'suit', 'shift', 'represents', 'superior', 'preferred', 'piano', 'puerto', 'dependent', 'ports', 'sf', 'rapid', 'pull', 'ut', 'deposit', 'latina', 'depends', 'holds', 'router', 'poland', 'folder', 'upload', 'pulse', 'strip', 'pearl', 'plot', 'airline', 'representation', 'lp', 'afternoon', 'trailer', 'hundred', 'operators', 'philippines', 'parallel', 'operate', 'opera', 'definitions', 'lesson', 'entitled', 'stainless', 'hospitals', 'duration', 'pursuant', 'para', 'adoption', 'pounds', 'plane', 'peer', 'thousand', 'susan', 'ftp', 'tutorial', 'holder', 'proposals', 'tutorials', 'duties', 'appointed', 'operational', 'rail', 'airlines', 'trips', 'turns', 'lease', 'proud', 'shipped', 'usual', 'appeared', 'finland', 'pleasure', 'asp', 'pants', 'nurse', 'represented', 'dial', 'par', 'fetish', 'applies', 'filters', 'apart', 'hilton', 'proteins', 'su', 'till', 'pen', 'epson', 'finds', 'seal', 'situations', 'fifth', 'lies', 'pipe', 'soldiers', 'ill', 'interpretation', 'lol', 'prefer', 'purple', 'def', 'lets', 'pipeline', 'prison', 'nl', 'postposted', 'oldest', 'epa', 'russell', 'tells', 'depression', 'foster', 'trials', 'tissue', 'fraud', 'lift', 'Lisa', 'studios', 'funded', 'pat', 'fell', 'Nelson', 'tourist', 'presentations', 'pour', 'dust', 'losses', 'stopped', 'pollution', 'arthur', 'roof', 'operated', 'federation', 'rush', 'surprise', 'partial', 'shoppers', 'Phil', 'http', 'satisfied', 'trusted', 'rep', 'supposed', 'pride', 'institutional', 'reporter', 'linda', 'solo', 'tall', 'pdas', 'api', 'pioneer', 'plates', 'stupid', 'lan', 'opens', 'latter', 'trailers', 'repeat', 'philips', 'flood', 'foto', 'pupils', 'polish', 'lands', 'troops', 'pine', 'laura', 'shopper', 'pills', 'donald', 'hunt', 'sealed', 'loaded', 'Fred', 'founded', 'aud', 'pound', 'pl', 'lie', 'rf', 'pension', 'fe', 'herself', 'sole', 'passion', 'laid', 'refund', 'pleased', 'phrase', 'paradise', 'roles', 'leaf', 'pad', 'diesel', 'saudi', 'fault', 'suspension', 'portions', 'infant', 'fluid', 'fits', 'hurt', 'pot', 'slip', 'studied', 'profits', 'florist', 'illustrated', 'alternate', 'funeral', 'nutten', 'pee', 'silent', 'pill', 'theft', 'lat', 'talent', 'offset', 'philip', 'elite', 'spin', 'holders', 'deadline', 'sur', 'loose', 'appeals', 'illness', 'southeast', 'soap', 'triple', 'unusual', 'partnerships', 'slots', 'routine', 'attitude', 'lenses', 'pi', 'dropped', 'atlas', 'feels', 'torture', 'deleted', 'ralph', 'opposition', 'defendant', 'app', 'peripherals', 'petition', 'departure', 'shoulder', 'doll', 'peru', 'refine', 'herald', 'fails', 'fed', 'latinas', 'suppose', 'opposite', 'understood', 'outline', 'Holland', 'fonts', 'refers', 'sunset', 'tops', 'handheld', 'disposal', 'shut', 'florists', 'thou', 'phd', 'pe', 'pleasant', 'lion', 'inspired', 'holes', 'passes', 'pointer', 'Neil', 'strap', 'transfers', 'surf', 'roulette', 'israeli', 'priorities', 'shelf', 'adopt', 'fotos', 'outer', 'tales', 'tu', 'lite', 'founder', 'dispute', 'sue', 'Sue', 'reputation', 'transferred', 'Pierre', 'photoshop', 'Indianapolis', 'ISP', 'populations', 'afraid', 'pointed', 'fusion', 'fortune', 'threshold', 'parish', 'planner', 'nurses', 'ssl', 'opt', 'flu', 'translate', 'rap', 'tune', 'pulled', 'shaped', 'seasonal', 'puts', 'painted', 'resulted', 'portrait', 'floral', 'neutral', 'fisher', 'spears', 'affiliated', 'tail', 'soup', 'delhi', 'alien', 'nepal', 'presidential', 'thru', 'palestinian', 'espn', 'fleet', 'untitled', 'totals', 'afford', 'referral', 'nhl', 'turner', 'reuters', 'thereof', 'households', 'depend', 'differ', 'repairs', 'tale', 'situated', 'surprised', 'retailer', 'opposed', 'spots', 'salon', 'FDA', 'soldier', 'phillips', 'panels', 'repeated', 'assault', 'spare', 'pal', 'proportion', 'essentials', 'adapters', 'separation', 'tuition', 'spouse', 'autos', 'lotus', 'separated', 'dl', 'pepper', 'tapes', 'isle', 'offshore', 'retailers', 'depot', 'alt', 'pie', 'pete', 'finest', 'penn', 'apparent', 'toilet', 'routes', 'helen', 'dale', 'oils', 'sept', 'spatial', 'respondents', 'unto', 'lt', 'leeds', 'stud', 'fold', 'hopes', 'peoples', 'pos', 'utils', 'spider', 'pairs', 'trails', 'Hudson', 'isolated', 'pole', 'shield', 'desperate', 'refused', 'undefined', 'fa', 'honolulu', 'lips', 'pond', 'rolls', 'profession', 'lil', 'loads', 'friendship', 'passport', 'unions', 'solaris', 'sunshine', 'ripe', 'stops', 'possession', 'nuts', 'nail', 'span', 'stanford', 'respondent', 'statute', 'shelter', 'radius', 'pads', 'sheep', 'railroad', 'stuart', 'ali', 'salad', 'np', 'paste', 'tft', 'praise', 'prairie', 'reunion', 'sells', 'spirits', 'float', 'paths', 'por', 'tap', 'fisheries', 'lauren', 'relate', 'suffer', 'forests', 'tunnel', 'patents', 'lithuania', 'loud', 'defines', 'airports', 'parade', 'notified', 'differential', 'folders', 'routers', 'pendant', 'inflation', 'ruth', 'pope', 'arnold', 'treasure', 'reload', 'pit', 'tile', 'spell', 'illustration',
		'apps', 'inspiration', 'Sudan', 'shuttle', 'prep', 'fastest', 'uploaded', 'pros', 'operates', 'phi', 'drill', 'offense', 'protest', 'inline', 'audi', 'supporters', 'statutes', 'drops', 'enrolled', 'prostores', 'reseller', 'suffered', 'assure', 'thehun', 'translated', 'pins', 'polo', 'fired', 'pd', 'prot', 'perth', 'leo', 'episodes', 'illustrations', 'suits', 'snap', 'happiness', 'ur', 'fruits', 'identifier', 'startup', 'flip', 'refuse', 'transparent', 'handled', 'floors', 'inappropriate', 'ln', 'roller', 'alter', 'latino', 'handles', 'fitted', 'shareholders', 'rip', 'oriental', 'sprint', 'inputs', 'sol', 'unified', 'polar', 'fallen', 'lip', 'sap', 'suse', 'alfred', 'foundations', 'nu', 'patio', 'dp', 'pursue', 'ou', 'ellis', 'leonard', 'oops', 'plains', 'trap', 'fool', 'nonprofit', 'suspended', 'attitudes', 'pts', 'replied', 'seafood', 'rrp', 'finite', 'allied', 'futures', 'ellen', 'latitude', 'deposits', 'trustees', 'reprints', 'resolutions', 'priest', 'ronald', 'runner', 'defend', 'infrared', 'une', 'stolen', 'fist', 'naturals', 'lenders', 'surplus', 'elder', 'treasurer', 'ethiopia', 'tp', 'athletes', 'dpi', 'snapshot', 'itunes', 'sponsorship', 'headphones', 'adelaide', 'furnished', 'settled', 'airfare', 'fate', 'porter', 'responded', 'alpine', 'andale', 'alias', 'thesaurus', 'appraisal', 'href', 'shapes', 'earl', 'rapids', 'sheffield', 'aus', 'endif', 'eternal', 'penalties', 'lit', 'aurora', 'una', 'slides', 'lender', 'sudden', 'lions', 'pools', 'isolation', 'speeds', 'sustained', 'rope', 'rational', 'fountain', 'foo', 'plaintiff', 'finnish', 'prisoners', 'deeper', 'entrepreneur', 'duo', 'helena', 'Tunisia', 'outlined', 'headline', 'defeat', 'Honduras', 'insured', 'harper', 'nutritional', 'hartford', 'sunrise', 'fur', 'affiliation', 'nudist', 'infinite', 'ensures', 'fatal', 'realtors', 'flesh', 'adapted', 'hull', 'partition', 'translations', 'reel', 'rp', 'infants', 'surround', 'patrol', 'pest', 'italiano', 'fp', 'reef', 'representations', 'tunes', 'len', 'phrases', 'peninsula', 'sofa', 'planets', 'harold', 'thunder', 'identifies', 'dept', 'euros', 'pirates', 'aerial', 'erp', 'ui', 'hindu', 'pushed', 'handhelds', 'slope', 'failures', 'poet', 'nails', 'saturn', 'nut', 'planes', 'shaft', 'lean', 'leslie', 'dude', 'fires', 'Luis', 'potato', 'Leone', 'pf', 'alto', 'eau', 'lauderdale', 'lap', 'Luther', 'frontier', 'settle', 'altered', 'propose', 'uh', 'trusts', 'talented', 'finals', 'steal', 'refined', 'fd', 'fifteen', 'fears', 'rolled', 'tuner', 'peterson', 'toddler', 'palestine', 'undo', 'halo', 'parental', 'lesser', 'proposition', 'apt', 'dealt', 'inf', 'denial', 'uri', 'prepaid', 'trustee', 'salaries', 'elephant', 'surrounded', 'psi', 'pas', 'stephanie', 'louise', 'routines', 'ferrari', 'fu', 'outputs', 'insulin', 'assured', 'prostate', 'adaptor', 'relates', 'referrals', 'papua', 'pipes', 'laden', 'realtor', 'fare', 'asus', 'Allan', 'frost', 'Leon', 'institutes', 'fo', 'prefers', 'alot', 'appropriations', 'idle', 'fin', 'pastor', 'uni', 'phases', 'ul', 'ol', 'hostels', 'diffs', 'tariff', 'opponent', 'pasta', 'ala', 'superintendent', 'dip', 'hostel', 'reprint', 'penetration', 'fathers', 'lined', 'petite', 'apparatus', 'dui', 'pens', 'strips', 'lid', 'deaf', 'sapphire', 'sheriff', 'spies', 'preston', 'feof', 'rounds', 'usda', 'peas', 'urls', 'disposition', 'needle', 'fairfield', 'til', 'learners', 'editorials', 'suited', 'reporters', 'hepatitis', 'flush', 'pale', 'nil', 'painful', 'ruled', 'pensions', 'idol', 'affair', 'upset', 'portraits', 'interpreted', 'titled', 'sphere', 'ladder', 'italia', 'lanes', 'purse', 'leu', 'peripheral', 'opponents', 'deferred', 'heel', 'plots', 'polished', 'tulsa', 'lou', 'elliott', 'fraser', 'loops', 'possess', 'sip', 'flashers', 'tf', 'installations', 'souls', 'pursuit', 'sleeps', 'endless', 'spine', 'trout', 'feat', 'thriller', 'pressed', 'usps', 'planners', 'disputes', 'persistent', 'auditor', 'prophet', 'naples', 'adaptation', 'hu', 'paso', 'turtle', 'ips', 'treasures', 'neural', 'fossil', 'apollo', 'disappointed', 'persian', 'entrepreneurs', 'foul', 'tiles', 'ru', 'pose', 'therapist', 'thereafter', 'sail', 'airplane', 'pod', 'lu', 'potatoes', 'peers', 'roland', 'ours', 'internship', 'lone', 'refresh', 'stripes', 'shepherd', 'flour', 'spas', 'intl', 'prisoner', 'earliest', 'stuffed', 'hl', 'translator', 'allah', 'fares', 'hoped', 'safer', 'insulation', 'laos', 'outlets', 'poison', 'from', 'have', 'more', 'home', 'can', 'search', 'information', 'time', 'contact', 'am', 'me', 'services', 'some', 'click', 'like', 'service', 'price', 'name', 'over', 'email', 'most', 'products', 'music', 'make', 'them', 'product', 'such', 'video', 'school', 'each', 'links', 'items', 'research', 'mail', 'map', 'could', 'item', 'center', 'must', 'travel', 'comments', 'made', 'development', 'terms', 'local', 'office', 'education', 'car', 'take', 'dvd', 'reserved', 'forum', 'code', 'even', 'check', 'special', 'prices', 'much', 'link', 'case', 'same', 'version', 'section', 'american', 'care', 'computer', 'place', 'him', 'access', 'think', 'resources', 'current', 'media', 'control', 'pictures', 'since', 'location', 'small', 'children', 'account', 'times', 'level', 'previous', 'form', 'events', 'love', 'main', 'call', 'department', 'description', 'insurance', 'class', 'cd', 'content', 'private', 'visit', 'save', 'customer', 'compare', 'movies', 'include', 'value', 'article', 'man', 'card', 'provide', 'source', 'course', 'Canada', 'process', 'room', 'stock', 'credit', 'science', 'men', 'advanced', 'look', 'team', 'conditions', 'select', 'live', 'market', 'action', 'model', 'human', 'provided', 'tv', 'second', 'accessories', 'cost', 'movie', 'forums', 'march', 'medical', 'come', 'server', 'pc', 'application', 'cart', 'articles', 'never', 'complete', 'topic', 'comment', 'financial', 'recent', 'park', 'act', 'performance', 'social', 'create', 'America', 'important', 'activities', 'oct', 'poker', 'court', 'event', 'China', 'picture', 'month', 'space', 'committee', 'cards', 'child', 'keep', 'California', 'similar', 'schools', 'million', 'reference', 'companies', 'term', 'film', 'computers', 'central', 'notice', 'cell', 'color', 'council', 'includes', 'track', 'discussion', 'archive', 'once', 'entertainment', 'format', 'months', 'cars', 'association', 'provides', 'close', 'common', 'drive', 'specific', 'several', 'collection', 'called', 'ask', 'limited', 'means', 'director', 'electronics', 'five', 'official', 'mar', 'technical', 'France', 'record', 'direct', 'microsoft', 'conference', 'environment', 'records', 'district', 'calendar', 'costs', 'statement', 'ever', 'miles', 'resource', 'applications', 'document', 'material', 'talk', 'tickets', 'centre', 'via', 'cheap', 'kids', 'finance', 'minutes', 'mark', 'rock', 'topics', 'individual', 'cover', 'videos', 'percent', 'function', 'fact', 'tech', 'meet', 'economic', 'amount', 'included', 'risk', 'thanks', 'various', 'production', 'commercial', 'received', 'choose', 'treatment', 'archives', 'camera', 'construction', 'clear', 'receive', 'domain', 'methods', 'chapter', 'makes', 'protection', 'policies', 'taken', 'models', 'cases', 'simple', 'license', 'lake', 'corporate', 'church', 'method', 'purchase', 'customers', 'active', 'practice', 'materials', 'chat', 'html', 'countries', 'face', 'discount', 'effects', 'created', 'political', 'increase', 'advertise', 'environmental', 'french', 'Africa', 'mean', 'pics', 'income', 'force', 'cash', 'overall', 'river', 'commission', 'contents', 'administration', 'screen', 'electronic', 'continue', 'across', 'someone', 'condition', 'effective', 'effect', 'asked', 'mind', 'selection', 'casino', 'menu', 'volume', 'cross', 'silver', 'corporation', 'mature', 'came', 'certain', 'mon', 'com', 'particular', 'names', 'skills', 'advice', 'career', 'decision', 'leave', 'facilities', 'kind', 'middle', 'move', 'values', 'division', 'machine', 'nice', 'score', 'statistics', 'client', 'ok', 'capital', 'sample', 'investment', 'Christmas', 'culture', 'choice', 'courses', 'consumer', 'levels', 'channel', 'mode', 'structure', 'summer', 'contract', 'homes', 'male', 'matter', 'custom', 'almost', 'took', 'located', 'multiple', 'cause', 'focus', 'rooms', 'female', 'inc', 'communications', 'associated', 'cancer', 'voice', 'schedule', 'documents', 'communication', 'comes', 'police', 'approach', 'cameras', 'maps', 'medicine', 'forms', 'smith', 'developed', 'thank', 'animal', 'sources', 'secure', 'evidence', 'christian', 'favorite', 'master', 'cut', 'improve', 'connection', 'impact', 'introduction', 'kitchen', 'accommodation', 'perfect', 'kit', 'classic', 'command', 'cities', 'distance', 'assessment', 'involved', 'interface', 'success', 'ma', 'selected', 'locations', 'vote', 'animals', 'manufacturer', 'mac', 'takes', 'searches', 'mother', 'considered', 'traffic', 'valid', 'modern', 'canadian', 'cool', 'normal', 'educational', 'metal', 'positive', 'chinese', 'develop', 'alternative', 'seems', 'van', 'contains', 'multi', 'components', 'vacation', 'academic', 'assistance', 'completed', 'skin', 'prev', 'pacific', 'mountain', 'vehicle', 'consider', 'match', 'mini', 'politics', 'disclaimer', 'mission', 'modified', 'pack', 'recommended', 'Richard', 'race', 'approved', 'character', 'maintenance', 'functions', 'places', 'trademarks', 'phentermine', 'etc', 'medium', 'television', 'core', 'dance', 'virtual', 'device', 'remote', 'dark', 'instructions', 'min', 'remove', 'surface', 'minimum', 'visual', 'teachers', 'martin', 'manual', 'increased', 'civil', 'associates', 'desktop', 'classes', 'sector', 'electric', 'instruments', 'officer', 'driver', 'respect', 'specified', 'procedures', 'teacher', 'farm', 'peace', 'campus', 'tom', 'creative', 'coast', 'devices', 'fiction', 'sometimes', 'careers', 'families', 'museum', 'themselves', 'evaluation', 'accepted', 'former', 'implementation', 'cat', 'references', 'respective', 'scale', 'critical', 'frame', 'musical', 'chief', 'individuals', 'Colorado', 'clean', 'African', 'relevant', 'connect', 'dev', 'cup', 'demand', 'Chris', 'advance', 'skip', 'auction', 'difference', 'correct', 'charles', 'piece', 'firm', 'seven', 'elements', 'species', 'cells', 'module', 'random', 'dvds', 'certificate', 'minister', 'motion', 'looks', 'directions', 'visitors', 'documentation', 'monitor', 'calls', 'couple', 'chance', 'vision', 'clients', 'actions', 'discuss', 'accept', 'automotive', 'naked', 'successful', 'communities', 'clinical', 'sciences', 'markets', 'lives', 'determine', 'temperature', 'palm', 'announcements', 'actual', 'historical', 'commerce', 'difficult', 'scientific', 'accounts', 'amateur', 'met', 'factors', 'coffee', 'cultural', 'steve', 'functional', 'closed', 'ice', 'pink', 'nc', 'architecture', 'scott', 'llc', 'sec', 'recommend', 'canon', 'minute', 'provider', 'cold', 'sections', 'chair', 'motor', 'va', 'continued', 'mass', 'crime', 'count', 'sc', 'claim', 'permission', 'patch', 'measures', 'kansas', 'miss', 'chemical', 'doctor', 'task', 'reduce', 'himself', 'component', 'mid', 'diamond', 'processes', 'servers', 'seconds', 'username', 'produced', 'classifieds', 'pocket', 'freedom', 'competition', 'premium', 'providers', 'characters', 'factor', 'km', 'stream', 'apartments', 'pick', 'auctions', 'administrative', 'prime', 'limit', 'informed', 'ac', 'creek', 'practices', 'platform', 'admin', 'machines', 'covered', 'merchant', 'comprehensive', 'universal', 'protect', 'cds', 'compliance', 'vehicles', 'prevent', 'theme', 'rich', 'im', 'marine', 'improvement', 'vs', 'claims', 'motorola', 'acceptance', 'mo', 'seem', 'touch', 'election', 'serve', 'mount', 'smart', 'multimedia', 'avoid', 'certified', 'corner', 'rank', 'element', 'virus', 'interactive', 'procedure', 'facts', 'column', 'chain', 'developer', 'avenue', 'domestic', 'sitemap', 'recommendations', 'moved', 'reach', 'comparison', 'mental', 'moment', 'inch', 'attack', 'centers', 'reserve', 'recipes', 'cvs', 'plastic', 'produce', 'placed', 'counter', 'camp', 'Minnesota', 'films', 'native', 'movement', 'approval', 'chart', 'contacts', 'cc', 'lcd', 'adventure', 'ave', 'advertisement', 'compared', 'determined', 'codes', 'kinds', 'statements', 'teams', 'cm', 'forces', 'electrical', 'disc', 'ct', 'named', 'manufacturers', 'classical', 'icon', 'dedicated', 'direction', 'nuclear', 'mouse', 'criminal', 'dream', 'cast', 'pic', 'promote', 'decided', 'covers', 'em', 'maintain', 'tourism', 'clips', 'iv', 'atom', 'estimated', 'script', 'served', 'miscellaneous', 'void', 'dakota', 'disk', 'vhs', 'credits', 'desk', 'criteria', 'dave', 'massachusetts', 'vice', 'associate', 'truck', 'revenue', 'measure', 'votes', 'looked', 'discussions', 'festival', 'ocean', 'lack', 'concept', 'checkout', 'scotland', 'con', 'specifications', 'tripadvisor', 'frank', 'alaska', 'anime', 'speak', 'decisions', 'protocol',
		'clip', 'provisions', 'speech', 'principles', 'replacement', 'spam', 'economics', 'acid', 'cent', 'forced', 'apartment', 'speaker', 'recreation', 'offices', 'remain', 'korea', 'participants', 'secret', 'favorites', 'missouri', 'var', 'perform', 'estimates', 'mt', 'drivers', 'married', 'protected', 'officials', 'conduct', 'contained', 'parameters', 'Miami', 'comics', 'matters', 'doc', 'controls', 'ultimate', 'representative', 'introduced', 'minor', 'departments', 'mom', 'reduced', 'performed', 'samples', 'davis', 'forecast', 'removed', 'administrator', 'amounts', 'contain', 'creation', 'static', 'scene', 'famous', 'chairman', 'violence', 'oklahoma', 'speakers', 'drink', 'permanent', 'constitutes', 'practical', 'delivered', 'infrastructure', 'concerns', 'colour', 'vendor', 'officers', 'reduction', 'aim', 'cape', 'mine', 'ticket', 'announced', 'prevention', 'ski', 'soccer', 'math', 'import', 'presence', 'mentioned', 'automatic', 'healthcare', 'maintained', 'ch', 'connected', 'christ', 'directors', 'aspects', 'moon', 'participation', 'scheme', 'manner', 'devel', 'amendment', 'inches', 'convention', 'principal', 'comfort', 'colors', 'cisco', 'kept', 'cruise', 'certification', 'specials', 'drives', 'arms', 'improved', 'achieve', 'rom', 'carried', 'panasonic', 'permalink', 'miller', 'provision', 'clothes', 'caused', 'frames', 'circuit', 'removal', 'src', 'trademark', 'eric', 'revised', 'americans', 'optical', 'promotion', 'relative', 'clock', 'hiv', 'conversion', 'victoria', 'revision', 'influence', 'importance', 'copies', 'recipe', 'permit', 'prescription', 'instance', 'licensed', 'tim', 'maine', 'conservation', 'specs', 'recorded', 'pieces', 'parks', 'cream', 'discover', 'nm', 'advisor', 'mn', 'marketplace', 'evil', 'evolution', 'certificates', 'remains', 'acc', 'firms', 'concerned', 'structures', 'cap', 'ink', 'charts', 'census', 'interracial', 'peak', 'competitive', 'compact', 'attempt', 'matches', 'accordance', 'discussed', 'accurate', 'climate', 'reservations', 'alcohol', 'instruction', 'differences', 'smaller', 'kill', 'mathematics', 'compensation', 'aircraft', 'modules', 'conflict', 'conducted', 'versions', 'occur', 'Mississippi', 'concern', 'connecticut', 'immediate', 'coach', 'kevin', 'audience', 'collections', 'participate', 'specialist', 'cook', 'affect', 'directed', 'affected', 'indicate', 'favourite', 'transmission', 'utc', 'characteristics', 'seek', 'cheats', 'contracts', 'developers', 'Nevada', 'kits', 'continues', 'tracks', 'cam', 'curriculum', 'template', 'prince', 'circle', 'atlantic', 'circumstances', 'investor', 'identification', 'ram', 'appliances', 'matt', 'unlimited', 'arm', 'launch', 'costa', 'acts', 'mesh', 'enforcement', 'crafts', 'hardcover', 'fiscal', 'denver', 'channels', 'ericsson', 'chocolate', 'scope', 'hampshire', 'cotton', 'controlled', 'killed', 'ancient', 'representatives', 'causes', 'Arkansas', 'attractions', 'transactions', 'historic', 'attached', 'tm', 'concert', 'retirement', 'scores', 'efficient', 'commitment', 'carrier', 'constant', 'visa', 'mouth', 'meter', 'linked', 'concepts', 'reflect', 'deliver', 'reform', 'classified', 'assume', 'confidence', 'alliance', 'fm', 'confirm', 'leaves', 'consistent', 'replace', 'clearance', 'connections', 'converter', 'checks', 'reached', 'indicated', 'sam', 'stick', 'securities', 'montana', 'volunteer', 'democratic', 'enhance', 'parameter', 'processor', 'formal', 'dimensions', 'lock', 'storm', 'micro', 'mile', 'mens', 'supreme', 'tank', 'estimate', 'kid', 'inspection', 'consumers', 'cancel', 'limits', 'transaction', 'manchester', 'continuous', 'initiative', 'novel', 'increases', 'contractor', 'indicates', 'adam', 'committed', 'universe', 'candidate', 'perspective', 'mirror', 'tournament', 'consideration', 'discounts', 'kernel', 'stocks', 'chosen', 'demo', 'clark', 'terminal', 'rice', 'reservation', 'empire', 'resume', 'avatar', 'rome', 'lincoln', 'premier', 'purchased', 'milk', 'decide', 'consent', 'drama', 'contest', 'collected', 'millions', 'lunch', 'muscle', 'implement', 'scheduled', 'sum', 'misc', 'calculator', 'chicken', 'sufficient', 'holdem', 'province', 'catholic', 'oak', 'vat', 'vancouver', 'seemed', 'measurement', 'formula', 'constitution', 'catch', 'pakistan', 'consultation', 'classroom', 'tasks', 'attacks', 'kim', 'merchandise', 'const', 'resistance', 'memorial', 'visitor', 'alumni', 'candidates', 'charlotte', 'preferences', 'romance', 'instrument', 'themes', 'heaven', 'classification', 'focused', 'cellular', 'vermont', 'ml', 'chip', 'simon', 'marks', 'loved', 'favourites', 'numerous', 'satisfaction', 'char', 'saved', 'cartoon', 'intellectual', 'moore', 'choices', 'interaction', 'crisis', 'outlook', 'massive', 'denmark', 'cs', 'formed', 'echo', 'patrick', 'revolution', 'consolidation', 'plasma', 'voip', 'landscape', 'mechanical', 'consultants', 'risks', 'applicant', 'charter', 'cooperation', 'counties', 'implemented', 'directories', 'dreams', 'notification', 'teach', 'occurred', 'Cleveland', 'reverse', 'seminar', 'investments', 'Dutch', 'sensitive', 'templates', 'formats', 'concrete', 'css', 'completion', 'universities', 'contractors', 'courts', 'notices', 'calculate', 'mc', 'converted', 'metro', 'improvements', 'specification', 'accident', 'nick', 'pump', 'smooth', 'conferences', 'strike', 'consumption', 'consultant', 'controller', 'committees', 'researchers', 'vietnam', 'castle', 'missed', 'molecular', 'residence', 'statistical', 'mention', 'innovation', 'pcs', 'amended', 'von', 'doctors', 'cinema', 'scan', 'elections', 'reaction', 'enhanced', 'severe', 'vi', 'humor', 'monitors', 'lived', 'sci', 'visits', 'domains', 'pmid', 'contrast', 'recommendation', 'recruitment', 'cute', 'siemens', 'cr', 'meant', 'capture', 'mechanism', 'meets', 'marked', 'driven', 'measured', 'medline', 'innovative', 'marshall', 'conclusion', 'tampa', 'meat', 'adams', 'monster', 'villa', 'columns', 'hamilton', 'detection', 'cookies', 'formation', 'med', 'cruises', 'moderator', 'settlement', 'roman', 'ethics', 'forever', 'captain', 'fantastic', 'neck', 'scripts', 'commit', 'livecam', 'descriptions', 'cache', 'determination', 'animation', 'oracle', 'productions', 'aviation', 'console', 'commands', 'telecommunications', 'instructor', 'achieved', 'approaches', 'alarm', 'stamps', 'franklin', 'scientists', 'convert', 'commissioner', 'volunteers', 'attachment', 'derived', 'desktops', 'appointment', 'hurricane', 'luck', 'producer', 'cheese', 'comic', 'investors', 'maker', 'crack', 'principle', 'picks', 'vacations', 'semester', 'calculated', 'casinos', 'appearance', 'smoke', 'apache', 'incorporated', 'craft', 'cake', 'mad', 'semi', 'coins', 'cafe', 'valentine', 'ken', 'familiar', 'Christopher', 'admission', 'elected', 'madison', 'terrorism', 'cpu', 'ethnic', 'parliament', 'actor', 'allocated', 'vertical', 'corrections', 'structural', 'municipal', 'occurs', 'consists', 'lecture', 'simulation', 'initiatives', 'concentration', 'classics', 'deck', 'mp', 'alive', 'temple', 'prove', 'discovered', 'restrictions', 'promise', 'modem', 'mph', 'sick', 'evaluate', 'tropical', 'collect', 'composition', 'vector', 'shaved', 'limousines', 'developments', 'mutual', 'skill', 'chairs', 'mountains', 'moves', 'checked', 'cats', 'coordinator', 'steven', 'summit', 'victims', 'spaces', 'fundamental', 'escape', 'coupons', 'receiver', 'cialis', 'scottish', 'championship', 'arcade', 'richmond', 'sacramento', 'platinum', 'talks', 'testimonials', 'clinton', 'masters', 'folk', 'commons', 'cincinnati', 'permitted', 'spectrum', 'arrival', 'emphasis', 'aspect', 'confirmed', 'counts', 'priced', 'crash', 'closer', 'assumes', 'infection', 'venture', 'clinic', 'korean', 'princess', 'mall', 'packet', 'involvement', 'placement', 'thompson', 'disclosure', 'memories', 'arrived', 'creates', 'faces', 'av', 'murder', 'cartoons', 'hence', 'replaced', 'rescue', 'occupation', 'lakes', 'associations', 'Kent', 'launched', 'conservative', 'shock', 'effectiveness', 'visited', 'demonstrate', 'atmosphere', 'kiss', 'overseas', 'purchases', 'counsel', 'invited', 'chemicals', 'mod', 'farmers', 'Ukraine', 'cluster', 'vendors', 'serves', 'lamp', 'couples', 'Nashville', 'CEO', 'palace', 'measurements', 'copper', 'rack', 'medication', 'dicke', 'receipt', 'violation', 'mit', 'independence', 'Keith', 'champion', 'chile', 'sentence', 'Maria', 'uniform', 'rm', 'vacuum', 'outcomes', 'survival', 'nova', 'lifetime', 'acres', 'venue', 'athletic', 'thermal', 'vital', 'coastal', 'modes', 'traveler', 'aluminum', 'sms', 'restricted', 'secrets', 'merchants', 'thick', 'attendance', 'drum', 'vista', 'chips', 'Amsterdam', 'adventures', 'announcement', 'outcome', 'appreciate', 'casual', 'centres', 'clause', 'smile', 'armed', 'Rick', 'trucks', 'mechanisms', 'divorce', 'Nikon', 'folks', 'telecom', 'indicators', 'emissions', 'complaint', 'scenes', 'scholarship', 'mill', 'supplements', 'chronic', 'icons', 'moral', 'keeps', 'locate', 'camcorder', 'ourselves', 'motors', 'incident', 'conversation', 'decrease', 'chest', 'revenues', 'churches', 'precision', 'reserves', 'solve', 'reproduction', 'diverse', 'amp', 'franchise', 'recorder', 'complaints', 'promotions', 'defence', 'patches', 'environments', 'divided', 'reception', 'emails', 'seminars', 'makers', 'discrimination', 'eve', 'marc', 'vitamin', 'processed', 'implications', 'intermediate', 'emotional', 'platforms', 'versus', 'districts', 'introduce', 'silk', 'promotional', 'compiled', 'romantic', 'revealed', 'specialists', 'correction', 'authentication', 'communicate', 'supplement', 'cal', 'sectors', 'kick', 'meal', 'unlike', 'dimension', 'proven', 'schedules', 'admissions', 'cached', 'involves', 'rpm', 'devil', 'continental', 'achievement', 'limitations', 'cuts', 'automated', 'chapters', 'convenient', 'mars', 'Francis', 'tvs', 'noticed', 'socket', 'caps', 'childhood', 'meta', 'humans', 'facial', 'seeker', 'mint', 'packard', 'poems', 'Collins', 'entrance', 'declaration', 'attempts', 'automation', 'impacts', 'rev', 'loves', 'induced', 'aims', 'recipient', 'islamic', 'athletics', 'alternatives', 'parker', 'corp', 'cooper', 'secured', 'destruction', 'rocks', 'conventional', 'applicants', 'mounted', 'median', 'scanner', 'occupational', 'animated', 'treatments', 'camcorders', 'Montreal', 'carpet', 'struct', 'punk', 'collective', 'coalition', 'enrollment', 'duke', 'pace', 'producers', 'collector', 'arc', 'interfaces', 'advertisers', 'moments', 'coat', 'convenience', 'container', 'confirmation', 'supervisor', 'corps', 'actors', 'liver', 'recall', 'picked', 'assumed', 'Minneapolis', 'decor', 'lookup', 'Harvard', 'diameter', 'podcast', 'interactions', 'intervention', 'attraction', 'invite', 'modification', 'involve', 'moderate', 'mice', 'dealtime', 'temp', 'assurance', 'clerk', 'vast', 'mills', 'amendments', 'receives', 'metropolitan', 'compilation', 'verification', 'mood', 'favor', 'veterans', 'attractive', 'occasion', 'victim', 'demands', 'careful', 'arrive', 'orchestra', 'tracked', 'moreover', 'minimal', 'framed', 'licence', 'allocation', 'discipline', 'demonstrated', 'camps', 'declared', 'dispatched', 'trace', 'packs', 'Romania', 'ncaa', 'consult', 'mask', 'inform', 'turkish', 'coal', 'pentium', 'announce', 'constructed', 'spoke', 'aka', 'refinance', 'cookie', 'meals', 'meters', 'calendars', 'conclusions', 'stretch', 'durham', 'furthermore', 'permits', 'cooperative', 'muslim', 'sleeve', 'netscape', 'cleaner', 'cricket', 'stroke', 'cad', 'transformation', 'remained', 'attachments', 'customs', 'administrators', 'hook', 'decline', 'medicare', 'cord', 'cloud', 'facilitate', 'valve', 'val', 'proceed', 'knife', 'liked', 'crop', 'rivers', 'pharmaceutical', 'Islam', 'cited', 'decade', 'adverse', 'steam', 'drinks', 'ace', 'voices', 'acute', 'perfume', 'carol', 'stack', 'democrats', 'curve', 'creator', 'museums', 'tracker', 'variation', 'trunk', 'camel', 'lamps', 'suicide', 'archived', 'chi', 'chase', 'mathematical', 'sauce', 'fame', 'corporations', 'criticism', 'confidential', 'accommodations', 'remarks', 'detected', 'decades', 'protective', 'acoustic', 'cassette', 'indicator', 'mistake', 'locked', 'eliminate', 'mineral', 'preference', 'canvas', 'claimed', 'screens', 'stadium', 'mins', 'coupon', 'stem', 'contests', 'announces', 'costume', 'voted', 'killer', 'corn', 'compression', 'farmer', 'counters', 'constitutional', 'slave', 'cultures', 'trek', 'cosmetic', 'informational', 'ethical', 'carriers', 'ecommerce', 'schemes', 'prospective', 'artificial', 'spectacular', 'coordination', 'connector', 'activation', 'haven', 'charm', 'violent', 'ranch', 'constraints', 'inclusive', 'dimensional', 'drunk', 'crimes', 'resolved', 'locator', 'processors', 'difficulties', 'resolve', 'cod', 'discs', 'trim', 'hispanic', 'procurement', 'diamonds', 'theoretical', 'surveillance', 'optimal', 'distinct', 'protocols', 'inclusion', 'cents', 'spoken', 'evaluated', 'civic', 'manuals', 'termination', 'saver', 'redeem', 'authentic', 'architectural', 'Louisville', 'macintosh', 'movements', 'amenities', 'Cole', 'mart', 'candle', 'colored', 'verified', 'comparative', 'seeks', 'docs', 'vitamins', 'vid', 'deemed', 'Liverpool', 'critics', 'hacker', 'Madrid', 'coin', 'fake', 'Norman', 'voters', 'cure', 'commander', 'arch', 'thinks', 'hdtv', 'aimed', 'harm', 'interval', 'mirrors', 'tricks', 'Kodak', 'filename', 'skirt', 'Florence', 'invest', 'um', 'scenario', 'lovers', 'atomic', 'faced', 'mat', 'Rachel', 'transmitted', 'screenshots', 'produces', 'oven', 'intensive', 'chains', 'deviant', 'correspondence', 'farms', 'imports', 'supervision', 'cheat', 'suspect', 'macro', 'crucial', 'cams', 'receptor', 'citation', 'pitch', 'premises', 'proved', 'offensive', 'imperial', 'cloth', 'stamp', 'salmon', 'directive', 'Salem', 'mate', 'likes', 'chef', 'races', 'slim', 'maple', 'comp', 'emission', 'spec', 'instructional', 'autumn', 'permissions', 'ranked', 'packed', 'outreach', 'recover', 'catherine', 'talked', 'chuck', 'reproduced', 'calculation', 'villas', 'consolidated', 'occasions', 'ceramic', 'prompt', 'precious', 'minds', 'considerations', 'scanners', 'atm', 'delivers', 'necklace', 'musicians', 'composite', 'cedar', 'UV', 'assessments', 'mason', 'pumps', 'vic', 'victor', 'Mario', 'attach', 'licenses', 'advised', 'preservation', 'interim', 'divine', 'approve', 'chose', 'compound', 'venues', 'calcium', 'antivirus', 'discounted', 'harvest', 'constitute', 'concluded', 'pickup', 'mothers', 'nascar', 'iceland', 'demonstration', 'manufactured', 'candles', 'variations', 'moms', 'sacred', 'addiction', 'morocco', 'chrome', 'oliver', 'nav', 'olive', 'scored', 'enhancement', 'clone', 'composed', 'performances', 'societies', 'silicon', 'identical', 'petroleum', 'compete', 'lover', 'thomson', 'soundtrack', 'malta', 'lc', 'dam', 'cnn', 'omaha', 'participant', 'scholarships', 'recreational', 'dominican', 'chad', 'electron', 'motel', 'occupied', 'scales', 'provincial', 'medications', 'rochester', 'stuck', 'solomon', 'advertiser', 'sophisticated', 'imposed', 'silence', 'scsi', 'focuses', 'soviet', 'cu', 'vocal', 'volumes', 'advances', 'lemon', 'darkness', 'vienna', 'implied', 'chapel', 'manufacture', 'accredited', 'appliance', 'compressed', 'univ', 'perspectives', 'Hampton', 'christians', 'therapeutic', 'impressive', 'architect', 'lectures', 'cups', 'cheapest', 'accidents', 'travesti', 'relocation', 'Salvador', 'Monroe', 'violations', 'foam', 'temperatures', 'clouds', 'competitions', 'discretion', 'preserve', 'poem', 'cosmetics', 'venice', 'concentrations', 'veteran', 'streams', 'katie', 'realistic', 'asks', 'christina', 'composer', 'ecuador', 'accessed', 'modifications', 'coral', 'colin', 'imported', 'millennium', 'vessel', 'acids', 'viruses', 'cheaper', 'admitted', 'admit', 'mem', 'samoa', 'stickers', 'reactions', 'ci', 'macromedia', 'companion', 'scroll', 'divisions', 'invalid', 'concerts', 'martial', 'males', 'victorian', 'colours', 'chaos', 'mastercard', 'chronicles', 'decorative', 'confused', 'compiler', 'vii', 'accused', 'instances', 'cfr', 'packets', 'anchor', 'socks', 'validation', 'corruption', 'incentives', 'cholesterol', 'slovenia', 'dramatic', 'surfaces', 'scientist', 'starsmerchant', 'clocks', 'females', 'nevertheless', 'reflects', 'fever', 'pmc', 'cuisine', 'practitioners', 'transcript', 'theorem', 'compounds', 'drums', 'structured', 'chicks', 'cattle', 'radical', 'rover', 'recommends', 'flame', 'levitra', 'tanks', 'mono', 'particles', 'stevens',
		'coordinate', 'limitation', 'compile', 'struck', 'construct', 'curious', 'meetup', 'eclipse', 'rec', 'affects', 'forecasts', 'detect', 'ciao', 'ampland', 'knee', 'complicated', 'chem', 'courier', 'shakespeare', 'collapse', 'americas', 'connectors', 'conflicts', 'techno', 'elvis', 'immune', 'latvia', 'travelers', 'cant', 'infected', 'Martha', 'incorrect', 'metals', 'celtic', 'irc', 'particle', 'perception', 'minerals', 'advise', 'dm', 'renaissance', 'ordinance', 'infections', 'chess', 'survive', 'oscar', 'festivals', 'menus', 'duck', 'reveal', 'canal', 'amino', 'clinics', 'mls', 'missions', 'costumes', 'strict', 'dive', 'saddam', 'circulation', 'cet', 'assumption', 'invention', 'nickname', 'technician', 'trick', 'closure', 'ppc', 'volt', 'div', 'predicted', 'cancellation', 'ministers', 'acer', 'intake', 'informal', 'relevance', 'incentive', 'tucson', 'mechanics', 'mistakes', 'numerical', 'uncle', 'reflection', 'sink', 'accompanied', 'invitation', 'devoted', 'princeton', 'sodium', 'hormone', 'childrens', 'naval', 'medieval', 'porcelain', 'avi', 'pichunter', 'captured', 'decent', 'cameron', 'columnists', 'carlos', 'diploma', 'innocent', 'consensus', 'valium', 'cordless', 'patricia', 'trivia', 'klein', 'undertaken', 'semiconductor', 'circular', 'mainland', 'chances', 'interact', 'auckland', 'calculations', 'crops', 'reduces', 'accomplished', 'calculators', 'impression', 'slovakia', 'correlation', 'capitol', 'sim', 'nervous', 'mcdonald', 'replica', 'nuke', 'charleston', 'calm', 'champions', 'selections', 'speaks', 'vocational', 'davidson', 'copied', 'scotia', 'pharmacies', 'fork', 'appreciated', 'Nicole', 'uc', 'skilled', 'asthma', 'assumptions', 'developmental', 'amend', 'anticipated', 'chick', 'advocate', 'sims', 'confusion', 'escorts', 'documented', 'medal', 'coaches', 'vessels', 'knives', 'eco', 'artistic', 'reflected', 'detector', 'precise', 'notifications', 'mainstream', 'invoice', 'colonial', 'mf', 'motels', 'cave', 'proceeds', 'indirect', 'ict', 'marina', 'decreased', 'tolerance', 'optics', 'overcome', 'inspector', 'attract', 'snake', 'succeed', 'reminder', 'searched', 'riverside', 'sku', 'Sullivan', 'karaoke', 'Lancaster', 'containers', 'Karl', 'collar', 'racial', 'Amanda', 'screenshot', 'kelkoo', 'confident', 'retrieved', 'consortium', 'terrace', 'novels', 'recipients', 'delicious', 'moisture', 'Spencer', 'transform', 'timer', 'educators', 'verse', 'humanities', 'scratch', 'launches', 'comm', 'competitors', 'rocket', 'racks', 'lace', 'consciousness', 'tumor', 'mistress', 'encounter', 'duncan', 'ment', 'attempted', 'col', 'midlands', 'trance', 'locale', 'Nicholas', 'hammer', 'invasion', 'administered', 'skins', 'mailed', 'oc', 'arctic', 'Frederick', 'medicaid', 'seventh', 'advertisements', 'CIA', 'determines', 'sculpture', 'motivation', 'mere', 'cons', 'sonic', 'cheers', 'punishment', 'appreciation', 'om', 'providence', 'restriction', 'incorporate', 'essence', 'transcription', 'holmes', 'complications', 'scholars', 'chester', 'loc', 'vp', 'testament', 'dominant', 'specifics', 'stomach', 'cn', 'ranks', 'tournaments', 'fraction', 'defects', 'milton', 'marker', 'reconstruction', 'monaco', 'emirates', 'comparisons', 'vaccine', 'promised', 'Volvo', 'minolta', 'discusses', 'ver', 'vulva', 'rim', 'prediction', 'pharmaceuticals', 'spice', 'oval', 'implies', 'soma', 'cooler', 'maritime', 'periodic', 'overhead', 'ascii', 'prospect', 'shipment', 'citations', 'manor', 'envelope', 'homeland', 'disclaimers', 'championships', 'disco', 'emotions', 'prospects', 'cleaners', 'cashiers', 'cite', 'nam', 'productive', 'metric', 'compliant', 'minus', 'hotmail', 'armenia', 'varied', 'closest', 'activated', 'actress', 'mess', 'politicians', 'accommodate', 'Milan', 'premiere', 'chorus', 'Christine', 'Clarke', 'precipitation', 'claire', 'matched', 'carroll', 'dump', 'incomplete', 'vocals', 'chronicle', 'muslims', 'mediterranean', 'reveals', 'architects', 'carries', 'freelance', 'devon', 'screensaver', 'saves', 'valuation', 'characteristic', 'marion', 'metallica', 'punch', 'appointments', 'narrative', 'enormous', 'karma', 'consist', 'academics', 'lucas', 'screensavers', 'vip', 'clicks', 'distinction', 'livestock', 'mardi', 'shake', 'marcus', 'mild', 'timeline', 'soc', 'fence', 'relatives', 'clan', 'shame', 'civilian', 'mesa', 'thickness', 'aerospace', 'democrat', 'maintains', 'shortcuts', 'ka', 'pamela', 'specifies', 'dem', 'accreditation', 'meditation', 'modular', 'microphone', 'macedonia', 'instrumental', 'moderators', 'memo', 'ham', 'solved', 'consoles', 'funk', 'porsche', 'kilometers', 'hopkins', 'indication', 'cohen', 'acre', 'enemies', 'controllers', 'chen', 'emma', 'finances', 'accepts', 'conventions', 'eva', 'smell', 'hc', 'coordinates', 'rca', 'carnival', 'sticker', 'promises', 'divide', 'stakeholders', 'consecutive', 'cornell', 'deserve', 'mailto', 'promo', 'chan', 'mas', 'kai', 'chelsea', 'dom', 'speeches', 'reaches', 'schema', 'considers', 'ministries', 'vacancies', 'Lucia', 'savannah', 'nerve', 'deficit', 'coupled', 'viii', 'metadata', 'circuits', 'ev', 'Somerset', 'incurred', 'caution', 'locks', 'miniature', 'hack', 'perceived', 'makeup', 'cos', 'pac', 'centuries', 'Richardson', 'vpn', 'fcc', 'markers', 'introduces', 'kills', 'roommate', 'computational', 'participated', 'impressed', 'surname', 'evident', 'epic', 'sake', 'merit', 'cumulative', 'Edmonton', 'tackle', 'disks', 'condo', 'pokemon', 'amplifier', 'prominent', 'retrieve', 'vernon', 'titanium', 'contacted', 'cdt', 'recorders', 'occasional', 'casio', 'deutsche', 'innovations', 'postcards', 'monte', 'cardiff', 'favors', 'panic', 'sticks', 'reforms', 'informative', 'influenced', 'circles', 'italic', 'mil', 'complement', 'cult', 'passive', 'mauritius', 'valued', 'checklist', 'verde', 'scenarios', 'hitachi', 'elevation', 'coleman', 'eval', 'anaheim', 'palmer', 'medicines', 'peaceful', 'pontiac', 'doctrine', 'scenic', 'enhancements', 'intersection', 'collectors', 'conclude', 'munich', 'oman', 'advisors', 'pavilion', 'tactics', 'supplemental', 'induction', 'derek', 'provinces', 'parcel', 'incidence', 'predict', 'avon', 'incidents', 'flavor', 'alike', 'homeless', 'metallic', 'acne', 'interference', 'listprice', 'cadillac', 'atmospheric', 'ppm', 'curtis', 'referenced', 'strikes', 'marathon', 'scout', 'charms', 'vcr', 'duplicate', 'electro', 'criterion', 'vietnamese', 'tremendous', 'remedies', 'maui', 'performs', 'plastics', 'realm', 'corrected', 'helmet', 'postcard', 'encountered', 'tsunami', 'scholar', 'nickel', 'pct.', 'creatures', 'commented', 'cleared', 'smilies', 'vids', 'accomplish', 'Shakira', 'corners', 'coated', 'doom', 'find-articles', 'reliance', 'infectious', 'podcasts', 'phenomenon', 'conscious', 'accent', 'eleven', 'oecd', 'unlock', 'vampire', 'dice', 'dock', 'mods', 'musician', 'vsnet', 'dispatch', 'revisions', 'armor', 'remark', 'varies', 'msie', 'ccd', 'sv', 'convinced', 'researcher', 'councils', 'occupations', 'pockets', 'pork', 'viral', 'develops', 'chassis', 'estimation', 'fleece', 'pediatric', 'pierce', 'sperm', 'filme', 'craps', 'mold', 'dame', 'tmp', 'traveller', 'suspected', 'tomatoes', 'instructors', 'clusters', 'competent', 'momentum', 'mud', 'calvin', 'shark', 'demonstrates', 'emerald', 'cliff', 'tract', 'cove', 'disciplines', 'casa', 'mu', 'conversations', 'simplified', 'muscles', 'serum', 'runtime', 'focal', 'decimal', 'deviation', 'propecia', 'influences', 'inspections', 'miracle', 'centered', 'conviction', 'omissions', 'retrieval', 'marvel', 'nomination', 'empirical', 'dependence', 'discrete', 'commitments', 'kinase', 'skirts', 'mats', 'remainder', 'televisions', 'commodities', 'declined', 'mime', 'elect', 'thinkpad', 'concentrate', 'intimate', 'reproductive', 'molecules', 'intervals', 'sentences', 'holocaust', 'keen', 'receivers', 'customise', 'variance', 'Cameroon', 'adaptive', 'computed', 'cathedral', 'nirvana', 'invision', 'madness', 'landscapes', 'computation', 'cardiovascular', 'sparc', 'cardiac', 'salvation', 'Dover', 'predictions', 'selective', 'token', 'sacrifice', 'seekers', 'numeric', 'kinda', 'emperor', 'malpractice', 'educated', 'mic', 'curves', 'tomato', 'travels', 'specialties', 'humanitarian', 'invitations', 'survivor', 'economies', 'counted', 'undertake', 'declare', 'valves', 'impaired', 'achievements', 'teaches', 'ventures', 'velvet', 'Secretariat', 'cop', 'adolescent', 'nominations', 'dim', 'cancelled', 'mattress', 'slovak', 'cakes', 'reservoir', 'occurrence', 'remind', 'respected', 'disclose', 'drove', 'restrict', 'mines', 'mentor', 'evaluations', 'elimination', 'metres', 'helicopter', 'pencil', 'performer', 'commissions', 'moss', 'concord', 'lance', 'cork', 'colon', 'likelihood', 'fundamentals', 'contamination', 'compromise', 'dome', 'namespace', 'crest', 'triumph', 'nominated', 'electoral', 'condos', 'controversial', 'recovered', 'trauma', 'advert', 'defensive', 'vanilla', 'monitored', 'Deutschland', 'picnic', 'arrivals', 'spank', 'practitioner', 'motivated', 'Smithsonian', 'vault', 'fioricet', 'revelation', 'dictionaries', 'mails', 'currencies', 'survivors', 'cannon', 'circus', 'promoted', 'enclosed', 'cooked', 'transmit', 'apnic', 'scanned', 'reflections', 'sic', 'detective', 'cement', 'fireplace', 'endorsement', 'missile', 'closes', 'summaries', 'violin', 'cir', 'looksmart', 'oaks', 'modems', 'harmful', 'enclosure', 'dividend', 'phantom', 'norm', 'supervisors', 'distances', 'transcripts', 'communist', 'handmade', 'creations', 'scoop', 'keno', 'mailman', 'Somalia', 'movers', 'stockholm', 'toolkit', 'erotica', 'temporal', 'commissioners', 'reductions', 'impose', 'telescope', 'advancement', 'harassment', 'resumes', 'favour', 'knock', 'replication', 'kurt', 'receptors', 'optimum', 'interventions', 'creature', 'mounts', 'aluminium', 'evanescence', 'coordinated', 'shipments', 'Maldives', 'Antarctica', 'cope', 'cradle', 'chancellor', 'lime', 'choir', 'virtue', 'promotes', 'mandate', 'departmental', 'corpus', 'reproduce', 'convicted', 'indices', 'roommates', 'spokesman', 'activists', 'ultram', 'cursor', 'insects', 'terminals', 'crude', 'maiden', 'simulations', 'cleanup', 'knit', 'conditional', 'conceptual', 'attacked', 'compute', 'arrives', 'tractor', 'continent', 'pike', 'instrumentation', 'constraint', 'touched', 'smallest', 'marsh', 'ctrl', 'scared', 'monsters', 'stake', 'cocktail', 'varieties', 'by', 'you', 'be', 'your', 'about', 'my', 'but', 'they', 'may', 'any', 'only', 'business', 'been', 'back', 'year', 'day', 'next', 'buy', 'system', 'city', 'policy', 'number', 'available', 'best', 'public', 'books', 'years', 'very', 'privacy', 'book', 'company', 'many', 'university', 'days', 'ebay', 'member', 'before', 'type', 'because', 'community', 'family', 'based', 'black', 'index', 'today', 'security', 'both', 'county', 'members', 'systems', 'history', 'size', 'directory', 'board', 'text', 'property', 'money', 'every', 'country', 'reply', 'December', 'York', 'box', 'table', 'October', 'November', 'library', 'really', 'industry', 'yes', 'September', 'better', 'say', 'yahoo', 'study', 'feedback', 'play', 'tax', 'mobile', 'party', 'payment', 'above', 'problem', 'memory', 'story', 'experience', 'key', 'body', 'club', 'example', 'Texas', 'pay', 'February', 'blue', 'easy', 'analysis', 'fax', 'possible', 'yet', 'problems', 'become', 'baby', 'delivery', 'try', 'society', 'safety', 'able', 'already', 'display', 'daily', 'beach', 'database', 'says', 'style', 'early', 'bill', 'bad', 'usually', 'player', 'lyrics', 'subscribe', 'submit', 'bank', 'linux', 'currently', 'toys', 'beauty', 'Friday', 'published', 'basic', 'holiday', 'brand', 'remember', 'bit', 'base', 'entry', 'stay', 'availability', 'summary', 'Monday', 'activity', 'copy', 'employment', 'bay', 'players', 'album', 'bar', 'double', 'build', 'types', 'benefits', 'apply', 'believe', 'Sunday', 'anyone', 'supply', 'executive', 'necessary', 'six', 'bush', 'military', 'British', 'zip', '.zip', 'bid', 'cable', 'Tuesday', 'lesbian', 'actually', 'band', 'button', 'distribution', 'responsible', 'primary', 'numbers', 'friendly', 'bed', 'everyone', 'physical', 'happy', 'survey', 'ready', 'Mexico', 'simply', 'paypal', 'valley', 'recently', 'probably', 'built', 'publications', 'blood', 'publisher', 'excellent', 'opportunity', 'basis', 'express', 'extra', 'especially', 'maximum', 'boy', 'Amazon', 'beautiful', 'directly', 'max', 'authority', 'bin', 'football', 'abstract', 'likely', 'employees', 'responsibility', 'publication', 'republic', 'century', 'expected', 'behind', 'boys', 'boards', 'faculty', 'membership', 'eye', 'born', 'except', 'usb', 'ability', 'maybe', 'brands', 'pretty', 'yourself', 'battery', 'youth', 'submitted', 'Boston', 'debt', 'break', 'established', 'external', 'theory', 'variety', 'block', 'fixed', 'finally', 'capacity', 'fully', 'businesses', 'eyes', 'benefit', 'sub', 'beyond', 'zone', 'complex', 'Columbia', 'economy', 'monthly', 'secretary', 'employee', 'bottom', 'royal', 'bible', 'basket', 'described', 'army', 'facility', 'ball', 'currency', 'bob', 'ex', 'xbox', 'x-box', 'particularly', 'buyer', 'easily', 'holidays', 'Zealand', 'balance', 'label', 'bus', 'dictionary', 'fantasy', 'context', 'breast', 'enable', 'exercise', 'Arizona', 'paperback', 'attorney', 'therapy', 'urban', 'myself', 'labor', 'immediately', 'heavy', 'recovery', 'expert', 'became', 'Pennsylvania', 'examples', 'branch', 'birth', 'abuse', 'tables', 'breakfast', 'identify', 'approximately', 'extended', 'sorry', 'lab', 'automatically', 'baseball', 'played', 'clubs', 'variable', 'expect', 'yesterday', 'extension', 'completely', 'funny', 'brother', 'portable', 'applicable', 'boat', 'Harry', 'basketball', 'assembly', 'taxes', 'brain', 'sexual', 'obtained', 'carry', 'priority', 'payments', 'brief', 'anonymous', 'mix', 'clearly', 'fix', 'pubmed', 'behavior', 'ray', 'duty', 'bear', 'laboratory', 'experts', 'exactly', 'dry', 'explore', 'Maryland', 'nearly', 'reality', 'billion', 'broken', 'zoom', 'battle', 'expression', 'bytes', 'compatible', 'zero', 'obtain', 'banks', 'bath', 'Kelly', 'healthy', 'ministry', 'birthday', 'beta', 'Brian', 'combined', 'displayed', 'physics', 'extreme', 'bars', 'oz', 'cycle', 'accuracy', 'bird', 'pharmacy', 'Brazil', 'lady', 'crystal', 'academy', 'dynamic', 'collectibles', 'exclusive', 'philosophy', 'bids', 'secondary', 'utility', 'fly', 'matrix', 'combination', 'turkey', 'Turkey', 'libraries', 'distributed', 'phoenix', 'bonus', 'previously', 'hey', 'bookmark', 'beat', 'batteries', 'adobe', 'becomes', 'subscription', 'contemporary', 'sky', 'nearby', 'exposure', 'luxury', 'babes', 'certainly', 'toy', 'layer', 'liability', 'Kentucky', 'mostly', 'taylor', 'trackback', 'factory', 'identity', 'reasonable', 'broadband', 'zum', 'bass', 'bedroom', 'empty', 'specifically', 'bureau', 'Sydney', 'yeah', 'boxes', 'encyclopedia', 'mixed', 'exist', 'poetry', 'bell', 'array', 'Elizabeth', 'playstation', 'explain', 'establish', 'expressed', 'extent', 'lesbians', 'Ben', 'export', 'employer', 'describe', 'backup', 'citizens', 'trouble', 'expand', 'experienced', 'lib', 'bike', 'totally', 'expenses', 'blonde', 'experiences', 'albums', 'extremely', 'verzeichnis', 'chemistry', 'Tony', 'variables', 'advisory', 'elementary', 'fox', 'sizes', 'exit', 'keys', 'printable', 'holy', 'symbol', 'buddy', 'observed', 'celebrity', 'styles', 'unix', 'bond', 'appendix', 'notify', 'blues', 'pub', 'cables', 'bluetooth', 'border', 'debate', 'notebook', 'explorer', 'husband', 'disabled', 'authorized', 'crazy', 'Britain', 'efficiency', 'comedy', 'specialty', 'bears', 'discovery', 'lifestyle', 'inventory', 'babe', 'enabled', 'exact', 'bound', 'contribute', 'hockey', 'brothers', 'submission', 'navy', 'territory', 'delay', 'contributions', 'Czech', 'execution', 'disability', 'examination', 'plays', 'bulletin', 'modify', 'Oxford', 'truly', 'extensive', 'affordable', 'databases', 'buyers', 'broad', 'labour', 'publishers', 'behalf', 'caribbean', 'Nebraska', 'salary', 'properly', 'expansion', 'vary', 'arab', 'keyboard', 'bands', 'boot', 'suitable', 'absolutely', 'chamber', 'typical', 'yours', 'temporary', 'beer', 'contribution', 'reliable', 'doubt', 'unable', 'democracy', 'symptom',
		'Baltimore', 'spy', 'bits', 'physician', 'blocks', 'normally', 'diabetes', 'bodies', 'flexible', 'relatively', 'birds', 'indexed', 'carbon', 'comfortable', 'effectively', 'employed', 'poverty', 'experimental', 'displays', 'mystery', 'banner', 'barbara', 'textbooks', 'hairy', 'diversity', 'specify', 'accessibility', 'tab', 'boots', 'subscriptions', 'Alexander', 'broadcast', 'Toshiba', 'anniversary', 'accessible', 'accessory', 'possibly', 'typically', 'exists', 'uniprotkb', 'surveys', 'malaysia', 'unsubscribe', 'labels', 'bio', 'exam', 'attorneys', 'density', 'ryan', 'sustainable', 'beds', 'employers', 'bills', 'bold', 'bathroom', 'stable', 'blank', 'deluxe', 'exception', 'bulk', 'successfully', 'fabric', 'primarily', 'capabilities', 'berlin', 'ba', 'expensive', 'buffalo', 'explained', 'expertise', 'eventually', 'bottle', 'rubber', 'python', 'alex', 'bone', 'collaboration', 'entity', 'valuable', 'collectables', 'busy', 'abc', 'tiny', 'liberal', 'tube', 'belt', 'hobbies', 'excess', 'biz', 'anthony', 'rob', 'vinyl', 'melbourne', 'liberty', 'possibility', 'analyst', 'reliability', 'unfortunately', 'respectively', 'columbus', 'prayer', 'responsibilities', 'carefully', 'productivity', 'notebooks', 'blind', 'andy', 'exp', 'capable', 'debian', 'victory', 'mainly', 'citizen', 'describes', 'prize', 'absolute', 'disabilities', 'anytime', 'substance', 'prohibited', 'layout', 'lbs', 'lay', 'dirty', 'bankruptcy', 'optimization', 'substances', 'breaks', 'exhibition', 'cabinet', 'tiffany', 'bet', 'toyota', 'definitely', 'buffer', 'existence', 'commentary', 'larry', 'necessarily', 'syntax', 'attribute', 'everyday', 'apparently', 'popularity', 'exhibit', 'visible', 'ya', 'nba', 'obviously', 'mercury', 'handbook', 'substantial', 'bb', 'boats', 'impossible', 'obvious', 'fiber', 'bedrooms', 'nz', 'memorabilia', 'bonds', 'alberta', 'explanation', 'subsection', 'electricity', 'okay', 'pottery', 'mexican', 'firefox', 'expense', 'spray', 'buttons', 'observations', 'vbulletin', 'extend', 'dublin', 'motorcycle', 'yard', 'establishment', 'mayor', 'yield', 'entirely', 'combat', 'closely', 'diary', 'seriously', 'baker', 'abroad', 'ebony', 'beast', 'experiment', 'pizza', 'yards', 'absence', 'everybody', 'sublime', 'acceptable', 'verify', 'Kerry', 'ordinary', 'nobody', 'stability', 'boss', 'expectations', 'metabolism', 'cloudy', 'personally', 'plenty', 'excellence', 'attributes', 'brass', 'plaza', 'publish', 'thumbnail', 'booty', 'acrobat', 'essays', 'behaviour', 'fairly', 'charity', 'excel', 'campbell', 'harbor', 'realize', 'enemy', 'puzzle', 'republican', 'lucky', 'syndrome', 'penalty', 'enables', 'builder', 'Terry', 'tabs', 'expanded', 'lovely', 'extras', 'broker', 'believed', 'tokyo', 'partly', 'customize', 'candy', 'exposed', 'deputy', 'physicians', 'experiments', 'boost', 'burn', 'labs', 'bread', 'tobacco', 'Roberts', 'dynamics', 'billy', 'capability', 'contributed', 'minority', 'sb', 'nancy', 'rehabilitation', 'clay', 'trembl', 'blvd', 'cyprus', 'correctly', 'functionality', 'hybrid', 'combine', 'exceed', 'bs', 'Cuba', 'preliminary', 'babies', 'bi', 'albert', 'examine', 'bristol', 'machinery', 'baskets', 'probability', 'barry', 'comply', 'cherry', 'Kenya', 'sized', 'literary', 'mhz', 'symbols', 'flexibility', 'boundary', 'payday', 'believes', 'robot', 'noble', 'extensions', 'lebanon', 'personalized', 'kennedy', 'nyc', 'toolbar', 'basically', 'axis', 'habitat', 'bachelor', 'basics', 'binary', 'difficulty', 'besides', 'observation', 'yr', 'embedded', 'liable', 'brochure', 'bestsellers', 'belief', 'bikini', 'texts', 'brokers', 'roy', 'bidder', 'literacy', 'customized', 'thirty', 'rapidly', 'ban', 'zus', 'mx', 'xhtml', 'ext', 'beam', 'polyphonic', 'lottery', 'essay', 'amy', 'alphabetical', 'voluntary', 'commonly', 'cry', 'Murray', 'zoo', 'blade', 'suddenly', 'canyon', 'merely', 'compatibility', 'xl', 'beef', 'robin', 'robinson', 'olympic', 'personality', 'subscriber', 'explains', 'bookstore', 'incredible', 'britney', 'fy', 'thumbs', 'hub', 'skype', 'realized', 'excerpt', 'albany', 'hazardous', 'somebody', 'amber', 'lb', 'colombia', 'distributor', 'bt', 'arabia', 'extract', 'specialized', 'payable', 'courtesy', 'automobile', 'statutory', 'bracelet', 'yorkshire', 'initially', 'hb', 'ruby', 'beads', 'cemetery', 'venezuela', 'exploration', 'proxy', 'astronomy', 'mlb', 'berkeley', 'bikes', 'bishop', 'perfectly', 'instantly', 'examined', 'submissions', 'lycos', 'zdnet', 'horizontal', 'mobility', 'builders', 'ultimately', 'brad', 'combo', 'naturally', 'tablet', 'subscribers', 'mitsubishi', 'basin', 'potentially', 'considerable', 'mozilla', 'byte', 'latex', 'branches', 'anymore', 'pantyhose', 'broke', 'complexity', 'constantly', 'barcelona', 'documentary', 'nylon', 'rocky', 'pixels', 'cb', 'hospitality', 'anybody', 'bunch', 'exercises', 'substitute', 'hopefully', 'brilliant', 'stayed', 'bull', 'breath', 'virtually', 'authorization', 'lynn', 'formerly', 'bp', 'herbal', 'strictly', 'stanley', 'expenditure', 'Brooklyn', 'connectivity', 'similarly', 'solely', 'collaborative', 'turbo', 'murphy', 'bomb', 'brush', 'thy', 'expansys', 'monkey', 'honey', 'analyses', 'ye', 'approx', 'symposium', 'arabic', 'sixth', 'bronze', 'expenditures', 'sandy', 'testimony', 'celebrities', 'mandatory', 'boundaries', 'syndication', 'celebration', 'exotic', 'puzzles', 'vb', 'destroy', 'yo', 'Perry', 'dozen', 'deployment', 'olympus', 'fx', 'butter', 'burden', 'zones', 'stylish', 'blend', 'occasionally', 'cbs', 'realty', 'phpbb', 'probe', 'excited', 'lopez', 'balanced', 'prescribed', 'timely', 'delayed', 'explicit', 'ebook', 'exclude', 'brooks', 'exceptional', 'anxiety', 'annually', 'xanax', 'pays', 'sunny', 'ebooks', 'unavailable', 'advocacy', 'essentially', 'blair', 'burns', 'phys', 'sensitivity', 'intensity', 'syndicate', 'abortion', 'blast', 'membrane', 'locally', 'bend', 'tommy', 'brake', 'exterior', 'delays', 'synthesis', 'unemployment', 'cyber', 'verizon', 'velocity', 'lambda', 'relay', 'baseline', 'cab', 'brazilian', 'beatles', 'barnes', 'daddy', 'ferry', 'rabbit', 'separately', 'exports', 'treasury', 'sys', 'frozen', 'royalty', 'rally', 'observer', 'ceremony', 'yamaha', 'rely', 'laundry', 'encryption', 'laboratories', 'treaty', 'toxic', 'thumbnails', 'pty', 'bizrate', 'sox', 'satisfy', 'destroyed', 'layers', 'vulnerability', 'accountability', 'celebrate', 'bahamas', 'mixture', 'bench', 'tub', 'mortality', 'borders', 'butts', 'bobby', 'nursery', 'contributors', 'tanzania', 'repository', 'christianity', 'executed', 'relax', 'namibia', 'synopsis', 'hardly', 'bean', 'absent', 'pixel', 'bias', 'bubble', 'contrary', 'tribune', 'dairy', 'fancy', 'exceptions', 'beliefs', 'analyze', 'ashley', 'additionally', 'execute', 'Cambodia', 'beaver', 'distribute', 'bases', 'bee', 'unity', 'bride', 'brunette', 'essex', 'beaches', 'terrible', 'cruz', 'baptist', 'bios', 'taxation', 'surely', 'myspace', 'nb', 'pray', 'stylus', 'reasonably', 'bare', 'mba', 'distributors', 'monetary', 'elderly', 'extraordinary', 'bolivia', 'exclusively', 'emily', 'rx', 'plymouth', 'bridal', 'annex', 'tribal', 'rebate', 'cycles', 'actively', 'pb', 'butler', 'shopzilla', 'payroll', 'cookbook', 'expressions', 'unlikely', 'tribute', 'forestry', 'barriers', 'rarely', 'barrier', 'bicycle', 'thereby', 'humidity', 'bottles', 'bra', 'brisbane', 'possibilities', 'herbs', 'manitoba', 'analytical', 'bryan', 'hobby', 'transexuales', 'executives', 'timber', 'playlist', 'steady', 'myers', 'publicly', 'hourly', 'blame', 'freebsd', 'veterinary', 'butterfly', 'heavily', 'fifty', 'randy', 'spirituality', 'proprietary', 'timothy', 'brick', 'thumbzilla', 'dayton', 'shortly', 'cabin', 'syria', 'harvey', 'hazard', 'boolean', 'diy', 'substantially', 'bizarre', 'olympics', 'ribbon', 'suzuki', 'handy', 'exempt', 'abs', 'barbados', 'chrysler', 'extends', 'brussels', 'tribe', 'superb', 'buzz', 'trinity', 'boom', 'exhaust', 'burton', 'troy', 'batch', 'harmony', 'zope', 'zambia', 'buf', 'comparable', 'tray', 'paperbacks', 'harbour', 'keyboards', 'vulnerable', 'bat', 'booth', 'bones', 'breed', 'sussex', 'respiratory', 'transexual', 'subcommittee', 'maternity', 'backed', 'carey', 'embassy', 'danny', 'rebecca', 'volleyball', 'adipex', 'horizon', 'deeply', 'toolbox', 'liabilities', 'prizes', 'bosnia', 'creativity', 'lloyd', 'eyed', 'beans', 'bookmarks', 'disable', 'xi', 'behavioral', 'bathrooms', 'raymond', 'abilities', 'za', 'lonely', 'hereby', 'observe', 'berry', 'simultaneously', 'bermuda', 'mobiles', 'exhibitions', 'exhibits', 'officially', 'bacteria', 'safely', 'kidney', 'periodically', 'fixes', 'durable', 'mazda', 'symantec', 'hz', 'tablets', 'tyler', 'independently', 'custody', 'bk', 'britannica', 'aye', 'bullet', 'nasty', 'visibility', 'beverly', 'bernard', 'forty', 'tubes', 'floyd', 'analysts', 'dx', 'biol', 'yu', 'bundle', 'exams', 'beneath', 'belly', 'tex', 'disturbed', 'poly', 'fixtures', 'consistently', 'obituaries', 'taxi', 'belarus', 'thumb', 'humanity', 'remembered', 'synthetic', 'expo', 'partially', 'buried', 'minimize', 'debut', 'bradley', 'deny', 'anatomy', 'bali', 'cube', 'uncertainty', 'subsidiary', 'clarity', 'beneficial', 'distributions', 'belize', 'penny', 'robust', 'republicans', 'abstracts', 'zen', 'ivory', 'fabulous', 'remix', 'individually', 'battlefield', 'literally', 'kay', 'benz', 'excluded', 'breeds', 'bailey', 'lexmark', 'remarkable', 'boulevard', 'ix', 'bennett', 'refurbished', 'trackbacks', 'rhythm', 'dietary', 'symphony', 'marilyn', 'tb', 'lyric', 'approximate', 'chambers', 'chubby', 'burner', 'yrs.', 'bm', 'excessive', 'unexpected', 'lobby', 'Bahrain', 'Betty', 'pubs', 'subdivision', 'tribes', 'hazards', 'exemption', 'sustainability', 'cabinets', 'holly', 'silly', 'yea', 'mercy', 'freely', 'readily', 'lindsay', 'satisfactory', 'revolutionary', 'bracelets', 'sync', 'telephony', 'remedy', 'briefly', 'barely', 'marble', 'surrey', 'belkin', 'blackberry', 'Brandon', 'balloon', 'Kazakhstan', 'invisible', 'fbi', 'cayman', 'commodity', 'bind', 'cylinder', 'buck', 'tba', 'puppy', 'Kathy', 'expires', 'consultancy', 'physically', 'hydrocodone', 'bon', 'combines', 'beth', 'bradford', 'reynolds', 'accurately', 'parliamentary', 'prefix', 'barrel', 'boulder', 'myanmar', 'floppy', 'texture', 'namely', 'rebel', 'systematic', 'textile', 'lamb', 'Uzbekistan', 'indexes', 'vocabulary', 'Albania', 'conspiracy', 'rehab', 'combinations', 'enzyme', 'arbitrary', 'fairy', 'builds', 'bye', 'kitty', 'blessed', 'explicitly', 'transsexual', 'citizenship', 'excuse', 'basement', 'hierarchy', 'banners', 'abandoned', 'beats', 'merry', 'scuba', 'extraction', 'Batman', 'utilization', 'calibration', 'efficiently', 'textbook', 'hypothesis', 'flux', 'derby', 'muze', 'consistency', 'celebs', 'prix', 'precisely', 'harley', 'acrylic', 'rays', 'horrible', 'blocked', 'libs', 'publicity', 'Belfast', 'exec', 'catalyst', 'bucks', 'civilization', 'analyzed', 'ballot', 'Lexus', 'validity', 'Yemen', 'internationally', 'buses', 'expedia', 'broader', 'yeast', 'Yale', 'ambassador', 'specially', 'Yukon', 'bite', 'habits', 'myth', 'continuity', 'brook', 'ensemble', 'biblical', 'mysimon', 'ambient', 'utilize', 'auburn', 'xerox', 'softball', 'differently', 'nextel', 'dozens', 'Liz', 'charitable', 'buys', 'characterized', 'Aruba', 'Dubai', 'barn', 'boc', 'bald', 'sally', 'yacht', 'Tracy', 'brochures', 'herb', 'breach', 'benchmark', 'stationery', 'unauthorized', 'antibody', 'contributor', 'desirable', 'ballet', 'bumper', 'explosion', 'banned', 'briefs', 'Mumbai', 'ozone', 'motherboard', 'inbox', 'samba', 'employ', 'manually', 'hydraulic', 'flex', 'yearly', 'belle', 'lazy', 'Cindy', 'carb', 'prototype', 'importantly', 'yen', 'rotary', 'boxed', 'sexuality', 'polyester', 'cubic', 'labeled', 'blah', 'motorcycles', 'deadly', 'bunny', 'exclusion', 'flyer', 'baths', 'brakes', 'sticky', 'destiny', 'climb', 'hay', 'brutal', 'arbitration', 'zinc', 'removable', 'yields', 'levy', 'Aberdeen', 'Dylan', 'bras', 'belts', 'blacks', 'rebates', 'burke', 'proudly', 'pix', 'necessity', 'basename', 'Kyle', 'obesity', 'suburban', 'vertex', 'nationally', 'expired', 'Alexandria', 'bacterial', 'continuously', 'teddy', 'convertible', 'dryer', 'tribunal', 'prayers', 'funky', 'lately', 'scary', 'banana', 'introductory', 'mixer', 'disciplinary', 'stays', 'beside', 'rebound', 'hypothetical', 'complimentary', 'freeze', 'ty', 'unnecessary', 'dramatically', 'maximize', 'characterization', 'optimize', 'expiration', 'bless', 'confidentiality', 'alternatively', 'alloy', 'Casey', 'blanket', 'bloom', 'blades', 'forbidden', 'dumb', 'securely', 'Blake', 'transparency', 'orbit', 'bacon', 'colony', 'paxil', 'temporarily', 'fatty', 'municipality', 'textiles', 'psychiatry', 'Deborah', 'bracket', 'oxide', 'promptly', 'paintball', 'prozac', 'sexually', 'playback', 'absorption', 'badly', 'continually', 'collectible', 'robots', 'sanyo', 'biodiversity', 'excitement', 'verbal', 'blink', 'presently', 'mysterious', 'novelty', 'voyuer', 'librarian', 'subsidiaries', 'fuzzy', 'relaxation', 'brave', 'Istanbul', 'asbestos', 'bolt', 'existed', 'barbie', 'inexpensive', 'Syracuse', 'beastality', 'subtle', 'canberra', 'mambo', 'controversy', 'sympathy', 'beautifully', 'blond', 'expects', 'fabrics', 'antibodies', 'polymer', 'poultry', 'burst', 'examinations', 'fibre', 'Zoloft', 'daisy', 'Daisy', 'Halifax', 'assembled', 'sufficiently', 'examines', 'myrtle', 'bored', 'yarn', 'bother', 'Budapest', 'Bhutan', 'automobiles', 'ricky', 'bent', 'asylum', 'arbor', 'with', 'new', 'was', 'we', 'will', 'page', 'what', 'which', 'news', 'when', 'who', 'web', 'now', 'get', 'view', 'would', 'how', 'were', 'just', 'two', 'world', 'go', 'work', 'copyright', 'message', 'software', 'Jan', 'good', 'well', 'where', 'rights', 'high', 'through', 'review', 'group', 'general', 'January', 'reviews', 'program', 'know', 'games', 'way', 'management', 'great', 'right', 'using', 'design', 'within', 'want', 'shipping', 'subject', 'between', 'long', 'show', 'website', 'being', 'women', 'sign', 'technology', 'project', 'pages', 'own', 'game', 'power', 'while', 'network', 'down', 'following', 'download', 'without', 'big', 'law', 'water', 'including', 'guide', 'change', 'white', 'rating', 'government', 'during', 'shopping', 'digital', 'John', 'image', 'why', 'quality', 'listing', 'low', 'college', 'jobs', 'job', 'training', 'join', 'categories', 'west', 'english', 'windows', 'gay', 'week', 'category', 'large', 'gallery', 'register', 'however', 'June', 'required', 'questions', 'July', 'going', 'again', 'looking', 'things', 'working', 'against', 'below', 'got', 'blog', 'equipment', 'login', 'programs', 'legal', 'give', 'August', 'quote', 'language', 'young', 'few', 'single', 'age', 'girls', 'password', 'something', 'gift', 'question', 'changes', 'night', 'browse', 'range', 'building', 'always', 'light', 'write', 'war', 'groups', 'given', 'request', 'making', 'might', 'major', 'Washington', 'meeting', 'garden', 'learning', 'energy', 'journal', 'welcome', 'images', 'original', 'away', 'agreement', 'log', 'faq', 'messages', 'marketing', 'having', 'green', 'gold', 'living', 'powered', 'whether', 'planning', 'weather', 'average', 'window', 'region', 'downloads', 'ago', 'word', 'works', 'written', 'hosting', 'thing', 'requirements', 'gifts', 'reading', 'together', 'getting', 'global', 'projects', 'Germany', 'watch', 'though', 'everything', 'words', 'james', 'weight', 'town', 'advertising', 'newsletter', 'knowledge', 'magazine', 'girl', 'registered', 'golf', 'wide', 'manager', 'listings', 'known', 'engineering', 'quick', 'wireless', 'whole', 'shows', 'google', 'hardware', 'figure', 'enough', 'designed', 'along', 'among', 'writing', 'higher', 'yellow', 'kingdom', 'thought', 'storage', 'Japan', 'doing', 'growth', 'agency', 'king', 'although', 'drug', 'western', 'package', 'engine', 'regional', 'views', 'dog', 'exchange', 'anything', 'organization', 'mortgage', 'wish', 'weeks', 'nothing', 'running', 'lower', 'jewelry', 'according', 'clothing', 'homepage', 'gas', 'huge', 'woman', 'taking', 'coming', 'object', 'logo', 'length', 'follow', 'shown', 'England', 'George', 'went', 'starting', 'registration', 'foreign', 'Wednesday', 'allow', 'degree', 'wed', 'song', 'win', 'browser', 'spring', 'answer', 'brown', 'operating', 'ratings', 'Chicago', 'glass', 'wanted', 'unique', 'regular', 'navigation', 'worldwide', 'larger', 'networks', 'strong', 'wedding', 'ground', 'overview', 'owners', 'william', 'award', 'wall', 'budget', 'guides', 'existing', 'quite', 'warning',
		'wine', 'forward', 'flowers', 'significant', 'technologies', 'owner', 'ways', 'providing', 'housing', 'gmt', 'bring', 'catalog', 'trying', 'programme', 'joined', 'strategy', 'agent', 'teaching', 'grand', 'testing', 'charge', 'wrote', 'leading', 'greater', 'processing', 'java', 'guest', 'photography', 'graphics', 'ring', 'grade', 'dating', 'organizations', 'mailing', 'longer', 'german', 'buying', 'require', 'Iraq', 'morning', 'otherwise', 'allows', 'string', 'stage', 'goods', 'japanese', 'background', 'target', 'moving', 'winter', 'keywords', 'throughout', 'wood', 'playing', 'awards', 'answers', 'programming', 'regarding', 'enjoy', 'subjects', 'agents', 'understanding', 'songs', 'wrong', 'beginning', 'gets', 'requires', 'jersey', 'saw', 'quotes', 'unknown', 'worth', 'workers', 'georgia', 'showing', 'progress', 'funding', 'grant', 'agree', 'watches', 'goes', 'interesting', 'blogs', 'wife', 'galleries', 'jack', 'flow', 'agencies', 'michigan', 'setting', 'highest', 'angeles', 'networking', 'gives', 'magazines', 'packages', 'laws', 'changed', 'begin', 'switch', 'largest', 'guy', 'guidelines', 'justice', 'weekly', 'vegas', 'square', 'gear', 'allowed', 'selling', 'regulations', 'jump', 'pricing', 'trading', 'whose', 'coverage', 'giving', 'ending', 'goal', 'wind', 'lowest', 'highly', 'publishing', 'emergency', 'developing', 'ringtones', 'village', 'www', 'settings', 'edge', 'monitoring', 'graduate', 'thinking', 'league', 'waste', 'accounting', 'manufacturing', 'fishing', 'bag', 'generally', 'techniques', 'johnson', 'quickly', 'websites', 'religion', 'driving', 'surgery', 'wild', 'generation', 'brought', 'bug', 'guarantee', 'meetings', 'Jones', 'keyword', 'flight', 'congress', 'walk', 'wait', 'argument', 'creating', 'jim', 'drugs', 'joint', 'upgrade', 'growing', 'hearing', 'generated', 'signed', 'Samsung', 'began', 'ga', 'thoughts', 'worked', 'quantity', 'reporting', 'nursing', 'designated', 'tags', 'joe', 'guys', 'integrated', 'configuration', 'languages', 'orange', 'campaign', 'guitar', 'finding', 'saying', 'challenge', 'strategies', 'towards', 'goals', 'suggest', 'charges', 'magic', 'talking', 'gave', 'manage', 'computing', 'Oregon', 'requests', 'quarter', 'racing', 'religious', 'kong', 'missing', 'viewed', 'sequence', 'opening', 'damage', 'gamma', 'snow', 'follows', 'weekend', 'bridge', 'Williams', 'printing', 'owned', 'Jesus', 'wa', 'Jackson', 'equal', 'matching', 'offering', 'dj', 'parking', 'wholesale', 'workshop', 'gone', 'golden', 'wi', 'lighting', 'gene', 'warranty', 'objects', 'evening', 'signal', 'Wisconsin', 'powerful', 'flower', 'Hawaii', 'flag', 'nj', 'advantage', 'designs', 'newsletters', 'savings', 'graphic', 'binding', 'winning', 'eight', 'straight', 'wants', 'dining', 'integration', 'tag', 'interview', 'framework', 'queen', 'sweet', 'Diego', 'hong', 'enlarge', 'frequently', 'changing', 'gain', 'flights', 'signs', 'Iowa', 'whatever', 'logged', 'vintage', 'eligible', 'forgot', 'handling', 'origin', 'knew', 'gaming', 'intelligence', 'bought', 'followed', 'blow', 'query', 'equity', 'wire', 'suggestions', 'strategic', 'judge', 'fight', 'height', 'gb', 'consulting', 'designer', 'managed', 'marriage', 'negative', 'springs', 'andrew', 'injury', 'joseph', 'lawyer', 'figures', 'sharing', 'waiting', 'gratis', 'banking', 'toward', 'won', 'slightly', 'lingerie', 'legislation', 'calling', 'jazz', 'serving', 'bags', 'wear', 'breaking', 'wales', 'frequency', 'reviewed', 'row', 'singles', 'mg', 'writer', 'gender', 'agriculture', 'cleaning', 'originally', 'regulation', 'recording', 'regions', 'junior', 'rings', 'meaning', 'wonderful', 'guess', 'agreed', 'whom', 'posting', 'viewing', 'increasing', 'majority', 'dogs', 'preview', 'containing', 'strength', 'guaranteed', 'degrees', 'Singapore', 'seeking', 'daughter', 'standing', 'wars', 'ordering', 'buildings', 'smoking', 'avg', 'signature', 'gambling', 'newspaper', 'slow', 'faqs', 'adding', 'grow', 'amazing', 'feeling', 'webmaster', 'seeing', 'sql', 'lawyers', 'javascript', 'aware', 'wilson', 'objectives', 'suggested', 'gps', 'greatest', 'generic', 'usage', 'continuing', 'wheel', 'lights', 'tracking', 'angel', 'keeping', 'receiving', 'width', 'engines', 'forget', 'greek', 'managing', 'raw', 'walking', 'newest', 'gnu', 'jeff', 'paragraph', 'managers', 'sweden', 'percentage', 'knows', 'requested', 'heritage', 'holding', 'agricultural', 'supporting', 'assigned', 'jordan', 'ages', 'plug', 'virgin', 'investigation', 'searching', 'sporting', 'helping', 'proceedings', 'organic', 'guests', 'concerning', 'equivalent', 'neighborhood', 'agenda', 'anyway', 'logic', 'grants', 'anywhere', 'psychology', 'wet', 'edward', 'leaving', 'wildlife', 'cooking', 'speaking', 'wave', 'checking', 'belgium', 'guidance', 'highway', 'booking', 'glossary', 'requirement', 'biology', 'pregnancy', 'biography', 'upcoming', 'financing', 'weblog', 'jean', 'jewish', 'interviews', 'gun', 'wonder', 'begins', 'qualified', 'draw', 'mysql', 'relating', 'warm', 'Lewis', 'Howard', 'engineer', 'organisation', 'becoming', 'objective', 'sugar', 'crew', 'legs', 'genre', 'Switzerland', 'colleges', 'showed', 'challenges', 'bowl', 'recognition', 'encourage', 'regulatory', 'weapons', 'resulting', 'Cambridge', 'winner', 'painting', 'outstanding', 'eating', 'watching', 'lodge', 'messenger', 'sterling', 'journals', 'gray', 'catalogue', 'Jennifer', 'charged', 'Taiwan', 'Greece', 'swiss', 'nights', 'liquid', 'gourmet', 'guard', 'saving', 'remaining', 'twenty', 'newly', 'Gary', 'depending', 'illegal', 'tomorrow', 'visiting', 'performing', 'downtown', 'findings', 'featuring', 'clicking', 'tower', 'significantly', 'shower', 'sending', 'Jason', 'tonight', 'awareness', 'governor', 'swimming', 'spyware', 'packaging', 'Jane', 'northwest', 'wallpaper', 'biggest', 'twin', 'gateway', 'drawing', 'biological', 'fighting', 'powers', 'pregnant', 'twice', 'Egypt', 'Hollywood', 'bargain', 'wikipedia', 'Norway', 'asking', 'hunting', 'photographs', 'cutting', 'wow', 'writers', 'mapping', 'Pittsburgh', 'paying', 'granted', 'spending', 'magnetic', 'listening', 'registry', 'bright', 'que', 'grid', 'allowing', 'earnings', 'journey', 'delaware', 'bidding', 'fig', 'acquisition', 'recognized', 'blogger', 'kg', 'licensing', 'wheels', 'editing', 'womens', 'technique', 'voting', 'qty', 'regard', 'arrangements', 'birmingham', 'flashing', 'narrow', 'sitting', 'putting', 'ownership', 'legislative', 'gardens', 'antique', 'willing', 'acting', 'logos', 'antiques', 'strange', 'grey', 'ag', 'drinking', 'generate', 'newspapers', 'aged', 'tight', 'flying', 'organized', 'improving', 'organisations', 'programmes', 'camping', 'jewellery', 'welfare', 'caught', 'agreements', 'considering', 'massage', 'closing', 'legend',
		'bang', 'bugs', 'engineers', 'gate', 'sw', 'portugal', 'Lawrence', 'dragon', 'imagine', 'brings', 'heating', 'leg', 'wing', 'governments', 'purchasing', 'dealing', 'jay', 'gap', 'corresponding', 'jacket', 'matthew', 'jr', 'giant', 'injuries', 'voltage', 'loading', 'angle', 'highlights', 'mining', 'designers', 'ongoing', 'worst', 'imaging', 'betting', 'Wyoming', 'blackjack', 'Argentina', 'dangerous', 'garage', 'exciting', 'thongs', 'gcc', 'ringtone', 'morgan', 'eagle', 'workshops', 'quiet', 'postage', 'mortgages', 'jet', 'crown', 'underground', 'diagnosis', 'gang', 'fellow', 'lounge', 'algorithm', 'gross', 'strongly', 'douglas', 'involving', 'investing', 'carrying', 'joy', 'jon', 'guardian', 'wayne', 'taught', 'worker', 'wings', 'genetic', 'participating', 'waters', 'ridge', 'bringing', 'nationwide', 'turning', 'immigration', 'surrounding', 'inquiry', 'throw', 'greg', 'navigate', 'worse', 'burning', 'somewhat', 'progressive', 'glance', 'graph', 'covering', 'judgment', 'filing', 'modeling', 'passing', 'awarded', 'cartridge', 'org', 'roger', 'workplace', 'awesome', 'wallpapers', 'heights', 'shadow', 'riding', 'grove', 'eligibility', 'healing', 'entering', 'winners', 'subsequent', 'rolling', 'adequate', 'grades', 'digest', 'reg', 'lodging', 'wiki', 'undergraduate', 'reducing', 'kings', 'shooting', 'nsw', 'flags', 'elsewhere', 'guestbook', 'walls', 'ward', 'drawn', 'walker', 'suggests', 'targets', 'dodge', 'assignment', 'gordon', 'queries', 'bmw', 'mpeg', 'whereas', 'yoga', 'woods', 'ranking', 'jokes', 'twiki', 'counseling', 'glad', 'wins', 'globe', 'milwaukee', 'warehouse', 'shareware', 'ghost', 'configure', 'applying', 'southwest', 'knowing', 'ignore', 'wealth', 'somewhere', 'dancing', 'recognize', 'writes', 'quest', 'screening', 'jonathan', 'whenever', 'forgotten', 'telling', 'config', 'intelligent', 'edinburgh', 'obligation', 'wake', 'Hungary', 'segment', 'regardless', 'rising', 'wells', 'wishlist', 'insight', 'glasses', 'iraqi', 'jessica', 'arguments', 'stewart', 'grown', 'gm', 'jerry', 'bulgaria', 'charger', 'regularly', 'cooling', 'gulf', 'tiger', 'angels', 'Afghanistan', 'spanking', 'governance', 'catering', 'finger', 'implementing', 'wooden', 'tough', 'gonna', 'emerging', 'worship', 'craig', 'producing', 'damages', 'ingredients', 'Johnny', 'facing', 'maintaining', 'sight', 'weak', 'towns', 'wise', 'wv', 'consequences', 'geography', 'appearing', 'integrity', 'worry', 'legacy', 'danger', 'widely', 'genuine', 'raising', 'glory', 'ja', 'bigger', 'billing', 'overnight', 'geographic', 'generator', 'jimmy', 'graham', 'Margaret', 'compaq', 'wolf', 'slowly', 'rugby', 'showtimes', 'promoting', 'grounds', 'regards', 'bandwidth', 'equation', 'wright', 'img', 'warren', 'reviewer', 'quarterly', 'grass', 'webcam', 'earrings', 'enjoyed', 'Quebec', 'passenger', 'manga', 'egg', 'signals', 'swing', 'analog', 'choosing', 'wisdom', 'gi', 'swedish', 'jurisdiction', 'displaying', 'witness', 'equipped', 'stages', 'encouraged', 'winds', 'powder', 'broadway', 'acquired', 'wash', 'cartridges', 'gnome', 'losing', 'gadgets', 'Glasgow', 'gospel', 'advantages', 'knight', 'preparing', 'linking', 'pending', 'determining', 'gt', 'conditioning', 'teenage', 'jam', 'answered', 'increasingly', 'migration', 'wearing', 'sought', 'genes', 'firewall', 'guns', 'judicial', 'adjustment', 'integer', 'engaged', 'falling', 'genetics', 'walter', 'wage', 'strings', 'dawn', 'representing', 'returning', 'warner', 'inkjet', 'wizard', 'killing', 'ottawa', 'singer', 'aging', 'plugin', 'diving', 'younger', 'happening', 'jeans', 'wrap', 'quiz', 'sigma', 'gr', 'recordings', 'jefferson', 'sleeping', 'gardening', 'obligations', 'outsourcing', 'adjustable', 'dialogue', 'identifying', 'GE', 'installing', 'switches', 'greatly', 'blogging', 'cycling', 'midnight', 'photographer', 'messaging', 'quantum', 'largely', 'requiring', 'arrow', 'engagement', 'sampling', 'rough', 'weird', 'weddings', 'oxygen', 'goto', 'arrangement', 'bibliography', 'feeding', 'township', 'rankings', 'measuring', 'jacksonville', 'headquarters', 'crowd', 'rainbow', 'gloves', 'skiing', 'hewlett', 'feelings', 'jamaica', 'timing', 'parenting', 'freeware', 'commonwealth', 'workforce', 'targeted', 'organizational', 'twelve', 'gamecube', 'portuguese', 'everywhere', 'eng', 'discharge', 'halloween', 'climbing', 'sing', 'methodology', 'housewares', 'recycling', 'hang', 'gbp', 'qualifications', 'coding', 'slideshow', 'passage', 'hiking', 'jelsoft', 'photograph', 'waves', 'underlying', 'wrestling', 'jp', 'gathering', 'projection', 'juice', 'logical', 'diagnostic', 'downloaded', 'judges', 'paintings', 'walked', 'arising', 'eggs', 'juvenile', 'injection', 'railway', 'jpg', 'causing', 'sunglasses', 'steering', 'flows', 'fewer', 'sequences', 'edwards', 'drew', 'tagged', 'gates', 'adjusted', 'gp', 'establishing', 'grew', 'coaching', 'encoding', 'litigation', 'broadcasting', 'artwork', 'struggle', 'suffering', 'bedding', 'joining', 'heading', 'equally', 'bearing', 'worlds', 'guilty', 'jury', 'lawn', 'underwear', 'crossing', 'cottage', 'holdings', 'selecting', 'Zimbabwe', 'Juan', 'MSG', 'browsing', 'moscow', 'jews', 'bargains', 'frequent', 'Nigeria', 'ceiling', 'ensuring', 'legislature', 'gen', 'singing', 'starring', 'quit', 'lung', 'highlight', 'sucking', 'gel', 'omega', 'assignments', 'Doug', 'watched', 'grill', 'Rogers', 'grain', 'regime', 'wanna', 'wishes', 'montgomery', 'ranging', 'hanging', 'projector', 'loving', 'routing', 'psychological', 'elegant', 'gains', 'renewal', 'genealogy', 'scoring', 'algorithms', 'margin', 'excluding', 'suggestion', 'justin', 'spotlight', 'investigate', 'connecting', 'logistics', 'tongue', 'bowling', 'drawings', 'significance', 'gauge', 'junction', 'protecting', 'solving', 'weekends', 'kingston', 'engage', 'switching', 'quoted', 'gym', 'adjacent', 'filtering', 'viewer', 'signup', 'luxembourg', 'reaching', 'damaged', 'laugh', 'joel', 'surgical', 'benjamin', 'studying', 'colleagues', 'cargo', 'upgrades', 'weapon', 'luggage', 'grocery', 'governing', 'julie', 'attending', 'janet', 'bow', 'recruiting', 'traveling', 'biotechnology', 'jackets', 'mounting', 'debug', 'peeing', 'equations', 'newton', 'bingo', 'whilst', 'eq', 'fingers', 'je', 'queensland', 'arranged', 'lang', 'raleigh', 'designing', 'qualify', 'diagram', 'footwear', 'sg', 'beijing', 'removing', 'brunswick', 'ranges', 'calgary', 'streaming', 'technological', 'dialog', 'wellness', 'newport', 'addressing', 'prague', 'previews', 'bangladesh', 'governmental', 'graduation', 'mega', 'sailing', 'Springfield', 'greeting', 'ecology', 'Congo', 'glen', 'Botswana', 'Newcastle', 'angry', 'Norwegian', 'belong', 'exchanges', 'wondering', 'seating', 'physiology', 'collecting', 'warrant', 'josh', 'drag', 'somehow', 'expanding', 'investigations', 'icq', 'hebrew', 'gained', 'dying', 'placing', 'homework', 'adjust', 'enabling', 'filling', 'downloadable', 'organ', 'stronger', 'vegetables', 'ws', 'stockings', 'joke', 'packing', 'rejected', 'gamespot', 'wordpress', 'guided', 'powell', 'scheduling', 'logging', 'accordingly', 'challenging', 'wines', 'microwave', 'jvc', 'unsigned', 'staying', 'jeremy', 'landing', 'signing', 'negotiations', 'cgi', 'showcase', 'integral', 'generating', 'congressional', 'sword', 'photographic', 'hoping', 'acquire', 'focusing', 'equality', 'achieving', 'leasing', 'squad', 'swim', 'wages', 'fellowship', 'genres', 'copyrights', 'wheat', 'obtaining', 'updating', 'readings', 'enlargement', 'eagles', 'campaigns', 'conjunction', 'indigenous', 'begun', 'trigger', 'gathered', 'hiring', 'Wallace', 'contracting', 'jeep', 'hung', 'graduates', 'controlling', 'assuming', 'Arlington', 'floating', 'indicating', 'Kuwait', 'alleged', 'widescreen', 'webster', 'warnings', 'inquiries', 'mag', 'affecting', 'freight', 'downloading', 'aggregate', 'stunning', 'injured', 'decorating', 'gif', 'beverage', 'wired', 'offerings', 'genesis', 'argue', 'furnishings', 'letting', 'Guatemala', 'Jamie', 'boxing', 'Bangkok', 'pathology', 'Hughes', 'photographers', 'Jeffrey', 'configured', 'contributing', 'cow', 'Watson', 'lying', 'Jerusalem', 'Fiji', 'enquiries', 'washing', 'staffing', 'cognitive', 'exploring', 'enquiry', 'registrar', 'showers', 'ruling', 'withdrawal', 'wider', 'saskatchewan', 'plugins', 'screw', 'Geneva', 'swingers', 'geek', 'defining', 'counting', 'Jacob', 'meanwhile', 'grip', 'bridges', 'watt', 'casting', 'warrior', 'scanning', 'copying', 'rpg', 'delivering', 'Uganda', 'journalism', 'frog', 'grammar', 'disagree', 'logs', 'statewide', 'Gregory', 'anger', 'arg', 'geo', 'jpeg', 'conducting', 'kissing', 'wal', 'swap', 'geometry', 'guild', 'gorgeous', 'fragrance', 'plumbing', 'neighbors', 'legends', 'projectors', 'comparing', 'Shanghai', 'farming', 'introducing', 'organize', 'Ghana', 'edges', 'mixing', 'Albuquerque', 'distinguished', 'projected', 'twins', 'regulated', 'triangle', 'reward', 'completing', 'hydrogen', 'webshots', 'copyrighted', 'warranties', 'genome', 'thong', 'walks', 'sage', 'arrange', 'ignored', 'evaluating', 'gather', 'forming', 'journalists', 'slight', 'amongst', 'wool', 'browsers', 'surfing', 'describing', 'lightning', 'quotations', 'grab', 'brighton', 'lending', 'insights', 'midwest', 'integrate', 'sociology', 'ought', 'jail', 'throws', 'hungarian', 'referring', 'Wichita', 'nasdaq', 'Uruguay', 'tuning', 'gotten', 'vegetable', 'highs', 'wanting', 'alignment', 'towers', 'ugly', 'watts', 'accessing', 'queue', 'witnesses', 'rows', 'fujitsu', 'spelling', 'rewards', 'strengthen', 'gods', 'Welsh', 'aggressive', 'quarters', 'pharmacology', 'fitting', 'bloggers', 'agrees', 'passengers', 'quantities', 'Petersburg', 'powerpoint', 'dig', 'subsequently', 'zoning', 'gravity', 'backgrounds', 'guitars', 'flooring', 'lightweight', 'mighty', 'scripting', 'galaxy', 'caring', 'worn', 'shaw', 'segments', 'twist', 'newbie', 'Darwin', 'wilderness', 'generations', 'proceeding', 'breakdown', 'strengths', 'rugs', 'encouraging', 'folding', 'viewpicture', 'bookings', 'gras', 'jungle', 'newer', 'ecological', 'consisting', 'submitting', 'breeding', 'geographical', 'mozambique', 'wifi', 'fwd', 'finishing', 'wellington', 'incoming', 'bulgarian', 'hwy', 'guam', 'aboriginal', 'preventing', 'eugene', 'gdp', 'pig', 'imagination', 'joshua', 'grande', 'conferencing', 'assign', 'armstrong', 'tigers', 'villages', 'digit', 'argued', 'accepting', 'findlaw', 'programmer', 'fighters', 'greetings', 'warming', 'grave', 'legitimate', 'biographies', 'investigator', 'gba', 'gentle', 'nightlife', 'footage', 'howto', 'worthy', 'sig', 'regarded', 'cigarette', 'fog', 'egyptian', 'consequently', 'treating', 'gotta', 'cowboy', 'queens', 'quantitative', 'naughty', 'algebra', 'shadows', 'formatting', 'wrapping', 'nicaragua', 'weblogs', 'belongs', 'rj', 'legally', 'breathing', 'adjustments', 'graphical', 'genius', 'discussing', 'fighter', 'meaningful', 'wherever', 'rug', 'borough', 'failing', 'voyeurweb', 'andrews', 'extending', 'jesse', 'logitech', 'briefing', 'wav', 'highland', 'combining', 'giants', 'organizing', 'winston', 'hawaiian', 'standings', 'gratuit', 'qatar', 'magnet', 'jaguar', 'posing', 'thanksgiving', 'urgent', 'guarantees', 'gothic', 'witch', 'congratulations', 'usgs', 'graphs', 'cigarettes', 'revenge', 'lows', 'aqua', 'enjoying', 'roughly', 'responding', 'gst', 'attempting', 'worried', 'garbage', 'competing', 'boring', 'jill', 'catalogs', 'quizzes', 'obj', 'typing', 'pointing', 'renew', 'handbags', 'jar', 'acknowledge', 'thoroughly', 'antigua', 'nottingham', 'questionnaire', 'qualification', 'modelling', 'hawk', 'consequence', 'origins', 'madagascar', 'tobago', 'presenting', 'troubleshooting', 'gl', 'magnitude', 'fragrances', 'licking', 'earthquake', 'fundraising', 'weights', 'geological', 'assessing', 'lasting', 'wicked', 'webcams', 'webmasters', 'junk', 'wax', 'answering', 'reggae', 'theology', 'whats', 'organizer', 'allergy', 'twisted', 'preceding', 'lexington', 'worldcat', 'postings', 'algeria', 'reviewing', 'cornwall', 'sandwich', 'uw', 'lawsuit', 'girlfriend', 'bloomberg', 'cheque', 'reject', 'gore', 'cage', 'requesting', 'courage', 'gazette', 'hearings', 'hugh', 'beverages', 'jake', 'ping', 'entertaining', 'prerequisite', 'stopping', 'refugees', 'knights', 'regression', 'renewable', 'passwords', 'sewing', 'recognised', 'gmc', 'azerbaijan', 'lighter', 'rage', 'astrology', 'occurring', 'travelling', 'pillow', 'spreading', 'relying', 'paraguay', 'widespread', 'boutique', 'enhancing', 'walt', 'hungry', 'warriors', 'malawi', 'wm', 'sagem', 'knowledgestorm', 'gays', 'pressing', 'gasoline', 'niagara', 'warcraft', 'allowance', 'designation', 'thrown', 'gem', 'badge', 'wrist', 'varying', 'weighted', 'angola', 'jenny', 'geology', 'wb', 'coating', 'wallet', 'boating', 'drainage', 'vegetarian', 'rouge', 'newfoundland', 'clearing', 'investigated', 'contacting', 'vegetation', 'Owen', 'hitting', 'beings', 'aquatic', 'striking', 'Singh', 'gig', 'Gilbert', 'weed', 'wives', 'mileage', 'pledge', 'Angela', 'nitrogen', 'merger', 'quad', 'firewire', 'framing', 'organised', 'blocking', 'rwanda', 'integrating', 'limiting', 'chargers', 'reasoning', 'wn', 'picking', 'guards', 'openings', 'burlington', 'replacing', 'watershed', 'acknowledged', 'kruger', 'granny', 'equilibrium', 'inquire', 'cottages', 'merge', 'privilege', 'Edgar', 'qualifying', 'pushing', 'dressing', 'vg', 'fuji', 'drilling', 'whale', 'beginners', 'highlighted', 'mustang', 'wiring', 'grateful', 'gradually', 'laughing', 'grows', 'journalist', 'afterwards', 'webpage', 'religions', 'garlic', 'senegal', 'wendy', 'signatures', 'daughters', 'wrapped', 'swift', 'bibliographic', 'champagne', 'hq', 'housewives', 'mongolia', 'penguin', 'magical', 'irrigation', 'wt', 'wound', 'writings', 'hamburg', 'mpg', 'qualities', 'charging', 'dow', 'explaining', 'gossip', 'rangers', 'worm', 'beginner', 'suggesting', 'crawford', 'privileges', 'specializing', 'marking', 'griffin', 'guyana', 'neighbor', 'highways', 'longest', 'refrigerator', 'workstation', 'dosage', 'navigator', 'investigators', 'baking', 'marijuana', 'gg', 'og', 'owns', 'generous', 'blowing', 'fascinating', 'jackie', 'PTO', 'WFH', 'accompanying', 'gd', 'configuring', 'guru', 'convergence', 'Gibraltar', 'anthropology', 'skating', 'grad', 'rendering', 'pulling', 'touring', 'waterproof', 'MJ', 'waiver', 'functioning', 'delight', 'Garcia', 'cingular', 'johns', 'gaps', 'jewel', 'bufing', 'stranger', 'tragedy', 'julian', 'nowhere', 'paragraphs', 'gale', 'joins', 'wesley', 'mpegs', 'likewise', 'wc', 'worcester', 'sbjct.', 'demographic', 'charming', 'annoying', 'washer', 'springer', 'Logan', 'fought', 'Baghdad', 'immigrants', 'powerseller', 'graduated', 'surprising', 'walnut', 'cj', 'workout', 'yugoslavia', 'bleeding', 'endangered', 'stating', 'align', 'engaging', 'negotiation', 'changelog', 'welding', 'yang', 'gently', 'greensboro', 'locking', 'draws', 'fridge', 'qc', 'justify', 'upgrading', 'pgp', 'surge', 'frontpage', 'aw', 'demanding', 'programmers', 'pj', 'cw', 'wr', 'hollow', 'examining', 'groove', 'delegation', 'wires', 'backing', 'greenhouse', 'figured', 'positioning', 'descending', 'Gerald', 'frequencies', 'hunger', 'surgeon', 'experiencing', 'glow', 'aquarium', 'magnificent', 'colleague', 'Newark', 'glucose', 'Westminster', 'warned', 'ware', 'hometown', 'wan', 'greene', 'Grenada', 'jade', 'acquisitions', 'earning', 'workflow', 'switched', 'grams', 'budgets', 'promising', 'goat', 'hardwood', 'forge', 'forwarding', 'awful', 'nightmare', 'organisms', 'viewers', 'savage', 'willow', 'gage', 'throwing', 'generators', 'wagon', 'urge', 'generates', 'thorough', 'quilt', 'snowboard', 'webcast', 'firmware', 'legendary', 'avoiding', 'jumping', 'hygiene', 'wit', 'surgeons', 'bouquet', 'immunology', 'wiley', 'Johnston', 'terminology', 'gentleman', 'jets', 'adware', 'qui', 'threatening', 'encourages', 'restructuring', 'viking', 'mug', 'crossword', 'knitting', 'mating', 'unwrap', 'longitude', 'challenged', 'telecharger', 'Wagner', 'groundwater', 'strengthening', 'cologne', 'wishing', 'ranger', 'infringement', 'subjective', 'lightbox', 'Swaziland', 'mediawiki', 'configurations',
		'Mr.', 'Mrs.', "shan't", "attr.", "Dr.", "Ms.", "Sean's", ".com", ".net", ".org", "www.", "abbr.", "m.d.", "u.f.o",
		"hot-head", "hate-note", "heat-hut", "stone-head", "tune-out", "spot-check", "part-time", "high-speed", "fire-resistant", "second-rate", "short-term", "good-looking", "blue-grey", "twenty-two", "all-knowing", "ex-friend", "one-third", "bell-bottom", "corn-fed", "de-emphasize", "low-grade", "round-trip", "able-bodied", "brother-in-law", "check-in", "clean-cut", "co-op", "empty-handed", "father-in-law", "zoo-animals", "follow-up", "free-for-all", "front-runner", "jack-in-the-box", "get-together", "hanky-panky", "high-tech", "ho-hum", "hush-hush", "in-depth", "in-law", "know-it-all", "life-size", "mother-in-law", "nitty-gritty", "not-for-profit", "off-site", "one-sided", "on-site", "roly-poly", "run-in", "runner-up", "self-service", "shrink-wrap", "single-minded", "strong-arm", "thirty-eight", "seventy-three", "three-dimensional", "tip-off", "topsy-turvey", "toss-up", "two-thirds", "u-turn", "warm-up", "well-being", "well-to-do", "word-of-mouth", "x-ray", "X-ray", "sans-serif",
		"man's", "woman's", "person's", "child's", "how's", "I'll", "you'll", "she'll", "he'll", "it'll", "we'll", "they'll", "that'll", "there'll", "this'll", "what'll", "who'll", "I'd", "you'd", "he'd", "she'd", "we'd", "they'd", "it'd", "there'd", "what'd", "who'd", "that'd", "let's", "he's", "she's", "it's", "what's", "that's", "who's", "there's", "here's", "one's", "I've", "you've", "we've", "they've", "could've", "would've", "should've", "might've", "who've", "there've", "you're", "we're", "they're", "who're", "I'm", "can't", "don't", "isn't", "won't", "shouldn't", "couldn't", "wouldn't", "aren't", "doesn't", "wasn't", "weren't", "hasn't", "haven't", "hadn't", "mustn't", "didn't", "mightn't", "needn't",
	]

	var sentence = `. The studio was filled with the rich odour of roses, and when the light summer wind stirred amidst the trees of the garden there came through the open door the heavy scent of the lilac, or the most delicate perfume of the pink-flowering thorn. From the corner of the divan of Persian saddlebags on which he was lying, smoking, as was his custom, innumerable cigarettes, Lord Henry Wotton could just catch the gleam of the honey-sweet and honey-coloured blossoms of a laburnum, whose tremulous branches seemed hardly able to bear the burden of a beauty so flamelike as theirs; and now and then the fantastic shadows of birds in flight flitted across the long tussore-silk curtains that were stretched in front of the huge window, producing a kind of momentary Japanese effect, and making him think of those pallid jade-faced painters of Tokio who, through the medium of an art that is necessarily immobile, seek to convey the sense of swiftness and motion. The sullen murmur of the bees shouldering their way through the long unmown grass, or circling with monotonous insistence round the dusty gilt horns of the straggling woodbine, seemed to make the stillness more oppressive. The dim roar of London was like the bourdon note of a distant organ. In the centre of the room, clamped to an upright easel, stood the full-length portrait of a young man of extraordinary personal beauty, and in front of it, some little distance away, was sitting the artist himself, Basil Hallward, whose sudden disappearance some years ago caused, at the time, such public excitement, and gave rise to so many strange conjectures. As the painter looked at the gracious and comely form he had so skilfully mirrored in his art, a smile of pleasure passed across his face, and seemed about to linger there. But he suddenly started up, and, closing his eyes, placed his fingers upon the lids, as though he sought to imprison within his brain some curious dream from which he feared he might awake. "It is your best work, Basil, the best thing you have ever done," said Lord Henry, languidly. "You must certainly send it next year to the Grosvenor. The Academy is too large and too vulgar. Whenever I have gone there, there have been either so many people that I have not been able to see the pictures, which was dreadful, or so many pictures that I have not been able to see the people, which was worse. The Grosvenor is really the only place." "I don't think I shall send it anywhere," he answered, tossing his head back in that odd way that used to make his friends laugh at him at Oxford. "No; I won't send it anywhere." Lord Henry elevated his eyebrows, and looked at him in amazement through the thin blue wreaths of smoke that curled up in such fanciful whorls from his heavy opium-tainted cigarette. "Not send it anywhere? My dear. fellow, why? Have you any reason? What odd chaps you painters are! You do anything in the world to gain a reputation. As soon as you have one, you seem to want to throw it away. It is silly of you, for there is only one thing in the world worse than being talked about, and that is not being talked about. A portrait like this would set you far above all the young men in England, and make the old men quite jealous, if old men are ever capable of any emotion." "I know you will laugh at me," he replied, "but I really can't exhibit it. I have put too much of myself into it." Lord Henry stretched himself out on the divan and laughed. "Yes, I knew you would; but it is quite true, all the same." "Too much of yourself in it! Upon my word, Basil, I didn't know you were so vain; and I really can't see any resemblance between you, with your rugged strong face and your coal-black hair, and this young Adonis, who looks as if he was made out of ivory and rose leaves. Why, my dear Basil, he is a Narcissus, and you--well, of course you have an intellectual expression, and all that. But beauty, real beauty, ends where an intellectual expression begins. Intellect is in itself a mode of exaggeration, and destroys the harmony of any face. The moment one sits down to think, one becomes all nose, or all forehead, or something horrid. Look at the successful men in any of the learned professions. How perfectly hideous they are! Except, of course, in the Church. But then in the Church they don't think. A bishop keeps on saying at the age of eighty what he was told to say when he was a boy of eighteen, and as a natural consequence he always looks absolutely delightful. Your mysterious young friend, whose name you have never told me, but whose picture really fascinates me, never thinks. I feel quite sure of that. He is some brainless, beautiful creature, who should be always here in winter when we have no flowers to look at, and always here in summer when we want something to chill our intelligence. Don't flatter yourself, Basil: you are not in the least like him." "You don't understand me, Harry," answered the artist. "Of course I am not like him. I know that perfectly well. Indeed, I should be sorry to look like him. You shrug your shoulders? I am telling you the truth. There is a fatality about all physical and intellectual distinction, the sort of fatality that seems to dog through history the faltering steps of kings. It is better not to be different from one's fellows. The ugly and the stupid have the best of it in this world. They can sit at their ease and gape at the play. If they know nothing of victory, they are at least spared the knowledge of defeat. They live as we all should live, undisturbed, indifferent, and without disquiet. They neither bring ruin upon others, nor ever receive it from alien hands. Your rank and wealth, Harry; my brains, such as they are--my art, whatever it may be worth; Dorian Gray's good looks--we shall all suffer for what the gods have given us, suffer terribly." "Dorian Gray? Is that his name?" asked Lord Henry, walking across the studio towards Basil Hallward. "Yes, that is his name. I didn't intend to tell it to you." "But why not?" "Oh, I can't explain. When I like people immensely I never tell their names to any one. It is like surrendering a part of them. I have grown to love secrecy. It seems to be the one thing that can make modern life mysterious or marvellous to us. The commonest thing is delightful if one only hides it. When I leave town now I never tell my people where I am going. If I did, I would lose all my pleasure. It is a silly habit, I dare say, but somehow it seems to bring a great deal of romance into one's life. I suppose you think me awfully foolish about it?" "Not at all," answered Lord Henry, "not at all, my dear Basil. You seem to forget that I am married, and the one charm of marriage is that it makes a life of deception absolutely necessary for both parties. I never know where my wife is, and my wife never knows what I am doing. When we meet--we do meet occasionally, when we dine out together, or go down to the Duke's--we tell each other the most absurd stories with the most serious faces. My wife is very good at it--much better, in fact, than I am. She never gets confused over her dates, and I always do. But when she does find me out, she makes no row at all. I sometimes wish she would; but she merely laughs at me." "I hate the way you talk about your married life, Harry," said Basil Hallward, strolling towards the door that led into the garden. "I believe that you are really a very good husband, but that you are thoroughly ashamed of your own virtues. You are an extraordinary fellow. You never say a moral thing, and you never do a wrong thing. Your cynicism is simply a pose." "Being natural is simply a pose, and the most irritating pose I know," cried Lord Henry, laughing; and the two young men went out into the garden together, and ensconced themselves on a long bamboo seat that stood in the shade of a tall laurel bush. The sunlight slipped over the polished leaves. In the grass, white daisies were tremulous. After a pause, Lord Henry pulled out his watch. "I am afraid I must be going, Basil," he murmured, "and before I go, I insist on your answering a question I put to you some time ago." "What is that?" said the painter, keeping his eyes fixed on the ground. "You know quite well." "I do not, Harry." "Well, I will tell you what it is. I want you to explain to me why you won't exhibit Dorian Gray's picture. I want the real reason." "I told you the real reason." "No, you did not. You said it was because there was too much of yourself in it. Now, that is childish." "Harry," said Basil Hallward, looking him straight in the face, "every portrait that is painted with feeling is a portrait of the artist, not of the sitter. The sitter is merely the accident, the occasion. It is not he who is revealed by the painter; it is rather the painter who, on the coloured canvas, reveals himself. The reason I will not exhibit this picture is that I am afraid that I have shown in it the secret of my own soul." Lord Henry laughed. "And what is that?" he asked. "I will tell you," said Hallward; but an expression of perplexity came over his face. "I am all expectation, Basil," continued his companion, glancing at him. "Oh, there is really very little to tell, Harry," answered the painter; "and I am afraid you will hardly understand it. Perhaps you will hardly believe it." Lord Henry smiled, and, leaning down, plucked a pink-petalled daisy from the grass, and examined it. "I am quite sure I shall understand it," he replied, gazing intently at the little golden white-feathered disk, "and as for believing things, I can believe anything, provided that it is quite incredible." The wind shook some blossoms from the trees, and the heavy lilac blooms, with their clustering stars, moved to and fro in the languid air. A grasshopper began to chirrup by the wall, and like a blue thread a long thin dragonfly floated past on its brown gauze wings. Lord Henry felt as if he could hear Basil Hallward's heart beating, and wondered what was coming. "The story is simply this," said the painter after some time. "Two months ago I went to a crush at Lady Brandon's. You know we poor artists have to show ourselves in society from time to time, just to remind the public that we are not savages. With an evening coat and a white tie, as you told me once, anybody, even a stockbroker, can gain a reputation for being civilized. Well, after I had been in the room about ten minutes, talking to huge overdressed dowagers and tedious Academicians, I suddenly became conscious that someone was looking at me. I turned halfway round, and saw Dorian Gray for the first time. When our eyes met, I felt that I was growing pale. A curious sensation of terror came over me. I knew that I had come face to face with someone whose mere personality was so fascinating that, if I allowed it to do so, it would absorb my whole nature, my whole soul, my very art itself. I did not want any external influence in my life. You know yourself, Harry, how independent I am by nature. I have always been my own master; had at least always been so, till I met Dorian Gray. Then--but I don't know how to explain it to you. Something seemed to tell me that I was on the verge of a terrible crisis in my life. I had a strange feeling that Fate had in store for me exquisite joys and exquisite sorrows. I grew afraid, and turned to quit the room. It was not conscience that made me do so: it was a sort of cowardice. I take no credit to myself for trying to escape." "Conscience and cowardice are really the same things, Basil. Conscience is the trade name of the firm. That is all." "I don't believe that, Harry, and I don't believe you do either. However, whatever was my motive--and it may have been pride, for I used to be very proud--I certainly struggled to the door. There, of course, I stumbled against Lady Brandon. 'You are not going to run away so soon, Mr. Hallward?' she screamed out. You know her curiously shrill voice?" "Yes; she is a peacock in everything but beauty," said Lord Henry, pulling the daisy to bits with his long, nervous fingers. "I could not get rid of her. She brought me up to Royalties, and people with Stars and Garters, and elderly ladies with gigantic tiaras and parrot noses. She spoke of me as her dearest friend. I had only met her once before, but she took it into her head to lionize me. I believe some picture of mine had made a great success at the time, at least had been chattered about in the penny newspapers, which is the nineteenth-century standard of immortality. Suddenly I found myself face to face with the young man whose personality had so strangely stirred me. We were quite close, almost touching. Our eyes met again. It was reckless of me, but I asked Lady Brandon to introduce me to him. Perhaps it was not so reckless, after all. It was simply inevitable. We would have spoken to each other without any introduction. I am sure of that. Dorian told me so afterwards. He, too, felt that we were destined to know each other." "And how did Lady Brandon describe this wonderful young man?" asked his companion. "I know she goes in for giving a rapid precis of all her guests. I remember her bringing me up to a truculent and red-faced old gentleman covered all over with orders and ribbons, and hissing into my ear, in a tragic whisper which must have been perfectly audible to everybody in the room, the most astounding details. I simply fled. I like to find out people for myself. But Lady Brandon treats her guests exactly as an auctioneer treats his goods. She either explains them entirely away, or tells one everything about them except what one wants to know." "Poor Lady Brandon! You are hard on her, Harry!" said Hallward, listlessly.`

	var wordLists = {
		lvl1: [],
		lvl2: [],
		lvl3: [],
		lvl4: [],
		lvl5: [],
		lvl6: [],
		lvl7: [],
	};

	var alphabet = "abcdefghijklmnopqrstuvwxyz',.-";

	// generate new list that includes certain letters and excludes others
	var customList = [];

	// returns the index of the nth occurance of a char or string
	function getPosition(target, subString, n) {
		return target.split(subString, n).join(subString).length;
	}

	// returns true if target (a string) contains at least one letter from 
	// pattern (an array of chars)
	function contains(target, pattern) {
		let value = 0;
		pattern.forEach(function (letter) {
			value = value + target.includes(letter);
		});
		return (value >= 1)
	}

	// returns true if target contains ALL letters in pattern, which is an array of chars
	function containsAll(target, pattern) {
		let value = 0;
		pattern.forEach(function (letter) {
			value = value + target.includes(letter);
		});
		return (value >= pattern.length);
	}

	function clearLists() {

	}

	// generates a list of words containing only the given letters
	function generateList(lettersToInclude, requiredLetters) {
		let excludes = [];

		// create the list of letters to exclude from final list so 
		// at the end you have only desired letters
		alphabet.split("").forEach((l) => {
			if (!lettersToInclude.includes(l)) {
				excludes.push(l);
			}
		});

		let wordList = [];

		masterList.forEach((word) => {
			if (!contains(word.toLowerCase(), excludes) && contains(word, requiredLetters.split(''))) {
				wordList.push(word);
			}
		});

		return wordList;
	}

	/* END wordList.js inlined */

	/* START keyboardDivs.js inlined */
	var keyboardDivs = `
	<div class=row>
		<div class="key" id='Backquote'><span class="letter"></span></div>
		<div class="key" id='Digit1'><span class="letter"></span></div>
		<div class="key" id='Digit2'><span class="letter"></span></div>
		<div class="key" id='Digit3'><span class="letter"></span></div>
		<div class="key" id='Digit4'><span class="letter"></span></div>
		<div class="key" id='Digit5'><span class="letter"></span></div>
		<div class="key" id='Digit6'><span class="letter"></span></div>
		<div class="key" id='Digit7'><span class="letter"></span></div>
		<div class="key" id='Digit8'><span class="letter"></span></div>
		<div class="key" id='Digit9'><span class="letter"></span></div>
		<div class="key" id='Digit0'><span class="letter"></span></div>
		<div class="key" id='Minus'><span class="letter"></span></div>
		<div class="key" id='Equal'><span class="letter"></span></div>
		<div class="key twou" id='BackSpace'><span class="letter"></span></div>
	</div>
	<div class=row>
		<div class="key onepointfiveu"><span class="letter"></span></div>
		<div class="key" id='KeyQ'><span class="letter"></span></div>
		<div class="key" id='KeyW'><span class="letter"></span></div>
		<div class="key" id='KeyE'><span class="letter"></span></div>
		<div class="key lvl3" id='KeyR'><span class="letter"></span></div>
		<div class="key lvl3" id='KeyT'><span class="letter"></span></div>
		<div class="key lvl3" id='KeyY'><span class="letter"></span></div>
		<div class="key lvl3" id='KeyU'><span class="letter"></span></div>
		<div class="key lvl5" id='KeyI'><span class="letter"></span></div>
		<div class="key lvl5" id='KeyO'><span class="letter"></span></div>
		<div class="key lvl5" id='KeyP'><span class="letter"></span></div>
		<div class="key" id='BracketLeft'><span class="letter"></span></div>
		<div class="key" id='BracketRight'><span class="letter"></span></div>
		<div class="key onepointfiveu" id='Backslash'><span class="letter"></span></div>
	</div>
	<div class=row>
		<div class="key onepointsevenfiveu"><span class="letter"></span></div>
		<div class="key lvl1" id='KeyA'><span class="letter"></span></div>
		<div class="key lvl1" id='KeyS'><span class="letter"></span></div>
		<div class="key lvl1" id='KeyD'><span class="letter"></span></div>
		<div class="key lvl1 restingPosition" id='KeyF'><span class="letter"></span></div>
		<div class="key lvl2" id='KeyG'><span class="letter"></span></div>
		<div class="key lvl2" id='KeyH'><span class="letter"></span></div>
		<div class="key lvl1 restingPosition" id='KeyJ'><span class="letter"></span></div>
		<div class="key lvl1" id='KeyK'><span class="letter"></span></div>
		<div class="key lvl1" id='KeyL'><span class="letter"></span></div>
		<div class="key lvl1" id='Semicolon'><span class="letter"></span></div>
		<div class="key" id='Quote'><span class="letter"></span></div>
		<div class="key twopointtwofiveu"><span class="letter"></span></div>
	</div>
	<div class=row>
		<div class="key twopointtwofiveu"><span class="letter"></span></div>
		<div class="key" id='KeyZ'><span class="letter"></span></div>
		<div class="key lvl6" id='KeyX'><span class="letter"></span></div>
		<div class="key lvl6" id='KeyC'><span class="letter"></span></div>
		<div class="key lvl4" id='KeyV'><span class="letter"></span></div>
		<div class="key lvl4" id='KeyB'><span class="letter"></span></div>
		<div class="key lvl4" id='KeyN'><span class="letter"></span></div>
		<div class="key lvl4" id='KeyM'><span class="letter"></span></div>
		<div class="key lvl5" id='Comma'><span class="letter"></span></div>
		<div class="key lvl6" id='Period'><span class="letter"></span></div>
		<div class="key lvl6" id='Slash'><span class="letter"></span></div>
		<div class="key twopointsevenfiveu"><span class="letter"></span></div>
	</div>
	<div class=row>
		<div class="key onepointtwofiveu"><span class="letter"></span></div>
		<div class="key onepointtwofiveu"><span class="letter"></span></div>
		<div class="key onepointtwofiveu"><span class="letter"></span></div>
		<div class="key sixpointtwofiveu"><span class="letter"></span></div>
		<div class="key onepointtwofiveu"><span class="letter"></span></div>
		<div class="key onepointtwofiveu"><span class="letter"></span></div>
		<div class="key onepointtwofiveu"><span class="letter"></span></div>
		<div class="key onepointtwofiveu"><span class="letter"></span></div>
	</div>
`;

	var customLayout = `
	<div class=row>
		<div class="cKey rowStart" id='customBackquote'><span class="letter"></span></div>
		<div class="cKey" id='customDigit1'><span class="letter"></span></div>
		<div class="cKey" id='customDigit2'><span class="letter"></span></div>
		<div class="cKey" id='customDigit3'><span class="letter"></span></div>
		<div class="cKey" id='customDigit4'><span class="letter"></span></div>
		<div class="cKey" id='customDigit5'><span class="letter"></span></div>
		<div class="cKey" id='customDigit6'><span class="letter"></span></div>
		<div class="cKey" id='customDigit7'><span class="letter"></span></div>
		<div class="cKey" id='customDigit8'><span class="letter"></span></div>
		<div class="cKey" id='customDigit9'><span class="letter"></span></div>
		<div class="cKey" id='customDigit0'><span class="letter"></span></div>
		<div class="cKey" id='customMinus'><span class="letter"></span></div>
		<div class="cKey" id='customEqual'><span class="letter"></span></div>
		<div class="cKey twou rowEnd" id='customBackSpace'><span class="letter"></span></div>
	</div>
	<div class=row>
		<div class="cKey onepointfiveu rowStart" id='customTab' ><span class="letter"></span></div>
		<div class="cKey normalCKey selectedInputKey defaultSelectedKey" id='customKeyQ'><span  class="letter pulse">_</span></div>
		<div class="cKey normalCKey" id='customKeyW'><span  class="letter"></span></div>
		<div class="cKey normalCKey" id='customKeyE'><span  class="letter"></span></div>
		<div class="cKey normalCKey" id='customKeyR'><span  class="letter"></span></div>
		<div class="cKey normalCKey" id='customKeyT'><span  class="letter"></span></div>
		<div class="cKey normalCKey" id='customKeyY'><span  class="letter"></span></div>
		<div class="cKey normalCKey" id='customKeyU'><span  class="letter"></span></div>
		<div class="cKey normalCKey" id='customKeyI'><span  class="letter"></span></div>
		<div class="cKey normalCKey" id='customKeyO'><span  class="letter"></span></div>
		<div class="cKey normalCKey" id='customKeyP'><span  class="letter"></span></div>
		<div class="cKey normalCKey" id='customBracketLeft'><span  class="letter"></span></div>
		<div class="cKey normalCKey" id='customBracketRight'><span  class="letter"></span></div>
		<div class="cKey onepointfiveu rowEnd" id='customBackslash'><span class="letter"></span></div>
	</div>
	<div class=row>
		<div class="cKey onepointsevenfiveu rowStart" id='customCapsLock'><span class="letter"></span></div>
		<div class="cKey lvl1 normalCKey" id='customKeyA'>
			<span class="letter"></span>
		</div>
		<div class="cKey lvl1 normalCKey" id='customKeyS'><span class="letter"></span></div>
		<div class="cKey lvl1 normalCKey" id='customKeyD'><span class="letter"></span></div>
		<div class="cKey lvl1 normalCKey restingPosition" id='customKeyF'><span class="letter"></span></div>
		<div class="cKey lvl2 normalCKey" id='customKeyG'><span class="letter"></span></div>
		<div class="cKey lvl2 normalCKey" id='customKeyH'><span class="letter"></span></div>
		<div class="cKey lvl1 normalCKey restingPosition" id='customKeyJ'><span class="letter"></span></div>
		<div class="cKey lvl1 normalCKey" id='customKeyK'><span class="letter"></span></div>
		<div class="cKey lvl1 normalCKey" id='customKeyL'><span class="letter"></span></div>
		<div class="cKey lvl1 normalCKey" id='customSemicolon'><span class="letter"></span></div>
		<div class="cKey normalCKey" id='customQuote'><span class="letter"></span></div>
		<div class="cKey twopointtwofiveu rowEnd" id='customEnter'><span class="letter"></span></div>
	</div>
	<div class=row>
		<div class="cKey twopointtwofiveu rowStart"><span class="letter"></span></div>
		<div class="cKey normalCKey" id='customKeyZ'><span class="letter"></span></div>
		<div class="cKey lvl6 normalCKey" id='customKeyX'><span class="letter"></span></div>
		<div class="cKey lvl6 normalCKey" id='customKeyC'><span class="letter"></span></div>
		<div class="cKey lvl4 normalCKey" id='customKeyV'><span class="letter"></span></div>
		<div class="cKey lvl4 normalCKey" id='customKeyB'><span class="letter"></span></div>
		<div class="cKey lvl4 normalCKey" id='customKeyN'><span class="letter"></span></div>
		<div class="cKey lvl4 normalCKey" id='customKeyM'><span class="letter"></span></div>
		<div class="cKey lvl5 normalCKey" id='customComma'><span class="letter"></span></div>
		<div class="cKey lvl6 normalCKey" id='customPeriod'><span class="letter"></span></div>
		<div class="cKey lvl6 normalCKey" id='customSlash'><span class="letter"></span></div>
		<div class="cKey twopointsevenfiveu rowEnd finalKey"><span class="letter"></span></div>
	</div>
	<div class='row'>
		<div class="cKey onepointtwofiveu rowStart"><span class="letter"></span></div>
		<div class="cKey onepointtwofiveu"><span class="letter"></span></div>
		<div class="cKey onepointtwofiveu"><span class="letter"></span></div>
		<div class="cKey onepointtwofiveu"><span class="letter"></span></div>
		<div class="cKey sixpointtwofiveu"><span class="letter"></span></div>
		<div class="cKey onepointtwofiveu"><span class="letter"></span></div>
		<div class="cKey onepointtwofiveu"><span class="letter"></span></div>
		<div class="cKey onepointtwofiveu"><span class="letter"></span></div>
		<div class="cKey onepointtwofiveu rowEnd"><span class="letter"></span></div>
	</div>
`;

	/* END keyboardDivs.js inlined */



	/*_____________dom elements_________*/

	// the string of text that shows the words for the user to type
	var prompt = document.querySelector('.prompt')
	//
	var wordChain = document.querySelector('#wordChain')
	//
	var answer = document.querySelector('#answer')
	//
	var scoreText = document.querySelector('#scoreText')
	//
	var timeText = document.querySelector('#timeText')
	//
	var resetButton = document.querySelector('#resetButton')
	//
	var accuracyText = document.querySelector('#accuracyText')
	//
	var wpmText = document.querySelector('#wpmText')
	//
	var testResults = document.querySelector('#testResults')
	//
	var input = document.querySelector('#userInput')
	// the main typing area
	var inputKeyboard = document.querySelector('#inputKeyboard')
	// keyboard layout customization ui
	var inputShiftKeyboard = document.querySelector('#inputShiftKeyboard')
	// the dom element representing the shift keys in customization ui
	var customInput = document.querySelector('.customInput')
	//
	var buttons = document.querySelector('nav').children
	//
	var currentWord = document.querySelector('#currentWord')
	// layout select menu
	var select = document.querySelector('select')
	//
	var mappingStatusButton = document.querySelector('#mappingToggle label input')
	//
	var mappingStatusText = document.querySelector('#mappingToggle h6 span')
	// save button on the custom layout ui
	var saveButton = document.querySelector('.saveButton')
	// discard button on the custom layout ui
	var discardButton = document.querySelector('.discardButton')
	// open button for the custom layout ui
	var openUIButton = document.querySelector('.openUIButton')
	// custom ui input field for custom keys
	var customUIKeyInput = document.querySelector('#customUIKeyInput')

	var promptOffset = 0;  // is this needed? May delete
	var score;				  // tracks the current number of correct words the user has typed
	var scoreMax = 50; // total number of words the user must type
	var seconds = 0;  // tracks the number of seconds%minutes*60 the current test has been running for 
	var minutes = 0;  // tracks the number of minutes the current test has been running for
	var gameOn = false; // set to true when user starts typing in input field
	var correct = 0;  // number of correct keystrokes during a game
	var errors = 0;  // number of typing errors during a game
	var currentLevel = localStorage.getItem('currentLevel') || 1; // int representation of the current level, which determines which letter set to test
	var correctAnswer;        // string representation of the current correct word
	var letterIndex = 0;  // Keeps track of where in a word the user is
	// Increment with every keystroke except ' ', return, and backspace
	// Decrement for backspace, and reset for the other 2
	var onlyLower = !localStorage.getItem('onlyLower') || localStorage.getItem('onlyLower') === 'true'; // If only lower is true, include only words
	// without capital letters
	var answerString = "";		  // A string representation of the words for the current test. After a correct word is typed,
	// it is removed from the beginning of answerString. By the end of the test, there should be 
	// no words in answerString
	var keyboardMap = layoutMaps['colemak'];
	var letterDictionary = levelDictionaries['colemak'];
	var currentLayout = localStorage.getItem('currentLayout') || 'colemak';
	var shiftDown = false; // tracks whether the shift key is currently being pushed
	var fullSentenceMode = false; // if true, all prompts will be replace with sentences
	var fullSentenceModeEnabled = localStorage.getItem('fullSentenceModeEnabled') === 'true';
	var timeLimitMode = localStorage.getItem('timeLimitMode') === 'true';
	var wordScrollingMode = !localStorage.getItem('wordScrollingMode') || localStorage.getItem('wordScrollingMode') === 'true';  // true by default.
	var deleteFirstLine = false; // make this true every time we finish typing a line
	var deleteLatestWord = false; // if true, delete last word typed. Set to true whenever a word is finished
	var sentenceStartIndex = -1; // keeps track of where we are in full sentence mode
	var sentenceEndIndex;
	var lineLength = 33;
	var lineIndex = 0;  // tracks which line of the prompt we are currently on
	var wordIndex = 0;  // tracks which word you are on (ONLY IN PARAGRAPH MODE)
	var idCount = 0;
	var answerWordArray = [];
	var specialKeyCodes = [27, 9, 20, 17, 18, 93, 36, 37, 38, 39, 40, 144, 36, 8, 16, 30, 32, 13, 8]; // list of all keycodes for keys we typically want to ignore
	var punctuation = localStorage.getItem('punctuation') || ''; // this contains punctuation to include in our test sets. Set to empty at first
	var requiredLetters = "";//levelDictionaries[currentLayout]['lvl'+currentLevel]+punctuation;; // keeps track of letters that still need to be used in the current level
	var initialCustomKeyboardState = ''; // saves a temporary copy of a keyboard layout that a user can return to by discarding changes
	var initialCustomLevelsState = ''; // saves a temporary copy of custom levels that a user can return to by discarding changes

	// preference menu dom elements
	var preferenceButton = document.querySelector('.preferenceButton'),
		preferenceMenu = document.querySelector('.preferenceMenu'),
		closePreferenceButton = document.querySelector('.closePreferenceButton'),
		capitalLettersAllowed = document.querySelector('.capitalLettersAllowed'),
		fullSentenceModeToggle = document.querySelector('.fullSentenceMode'),
		fullSentenceModeLevelButton = document.querySelector('.lvl8'),
		wordLimitModeButton = document.querySelector('.wordLimitModeButton'),
		wordLimitModeInput = document.querySelector('.wordLimitModeInput'),
		timeLimitModeButton = document.querySelector('.timeLimitModeButton'),
		timeLimitModeInput = document.querySelector('.timeLimitModeInput'),
		wordScrollingModeButton = document.querySelector('.wordScrollingModeButton'),
		punctuationModeButton = document.querySelector('.punctuationModeButton');

	start();
	init();

	// this is the true init, which is only called once. Init will have to be renamed
	// Call to initialize
	function start() {
		document.querySelector('.cheatsheet').innerHTML = keyboardDivs;
		inputKeyboard.innerHTML = customLayout;
		// scoreMax = wordLimitModeInput.value;
		customInput.style.display = 'flex';

		if (!wordScrollingMode) {
			toggleWordScrollingModeUI();
		}

		if (fullSentenceModeEnabled) {
			toggleFullSentenceModeUI();
		}

		if (timeLimitMode) {
			toggleTimeLimitModeUI();
		}

		// if true, user keyboard input will be mapped to the chosen layout. No mapping otherwise
		if (localStorage.getItem('keyRemapping') === 'true') {
			mappingStatusButton.checked = 'checked';
			mappingStatusText.innerText = 'on';
		}

		select.value = currentLayout;
		capitalLettersAllowed.checked = !onlyLower;
		punctuationModeButton.checked = punctuation;
		fullSentenceModeToggle.checked = fullSentenceModeEnabled;
		wordScrollingModeButton.checked = wordScrollingMode;
		timeLimitModeButton.checked = timeLimitMode;
		wordLimitModeButton.checked = !timeLimitMode;

		if (localStorage.getItem('preferenceMenu')) {
			openMenu();
		}

		switchLevel(currentLevel);

		updateLayoutUI();
	}


	// some of the stuff in this function should probably be put into reset and we should examine when reset is called
	// the rest should be in start(), which works like an actual init function should
	// RENAME AND REFACTOR THIS PLEASE
	function init() {
		createTestSets();
		reset();
		updateCheatsheetStyling(currentLevel);
	}


	/*________________Timers and Listeners___________________*/

	// makes the clock tic
	setInterval(() => {
		if (gameOn) {
			if (!timeLimitMode) {
				seconds++;
				if (seconds >= 60) {
					seconds = 0;
					minutes++;
				}
			} else {
				// clock counting down
				seconds--;
				if (seconds <= 0 && minutes <= 0) {
					endGame();
				}
				if (seconds < 0) {
					seconds = 59;
					minutes--;
				}
			}
			resetTimeText();
		}
	}, 1000);

	// starts the timer when there is any change to the input field
	input.addEventListener('keydown', (e) => {
		gameOn = true;
	});


	/*___________________________________________________________*/
	/*____________________preference menu________________________*/

	function openMenu() {
		preferenceMenu.style.right = 0;
		localStorage.setItem('preferenceMenu', 'open');
	}

	function closeMenu() {
		preferenceMenu.style.right = '-37vh';
		localStorage.removeItem('preferenceMenu');
	}

	// close preference menu on escape key. While we're at it, also close custom
	// ui menu
	document.addEventListener('keydown', (e) => {
		if (e.keyCode == 27) {
			closeMenu();

			// close custom ui menu
			if (customInput.style.transform != 'scaleX(0)') {
				customInput.style.transform = 'scaleX(0)';
				// remove active class from current key
				clearSelectedInput();
				init();
			}
		}
	});

	// listener for preference menu button
	preferenceButton.addEventListener('click', () => {
		openMenu();
	});

	// listener for preference menu close button
	closePreferenceButton.addEventListener('click', () => {
		closeMenu();
	});

	// capital letters allowed
	capitalLettersAllowed.addEventListener('click', () => {
		onlyLower = !onlyLower;
		localStorage.setItem("onlyLower", onlyLower);
		reset();
	});

	// full sentence mode
	function toggleFullSentenceModeUI() {
		fullSentenceModeLevelButton.classList.toggle('visible');
	}

	fullSentenceModeToggle.addEventListener('click', () => {
		fullSentenceModeEnabled = !fullSentenceModeEnabled;
		localStorage.setItem('fullSentenceModeEnabled', fullSentenceModeEnabled);
		toggleFullSentenceModeUI();
		if (fullSentenceModeEnabled) {
			switchLevel(8);
		} else {
			switchLevel(1);
		}
		reset();
	});

	// Toggle display of time limit mode input field
	function toggleTimeLimitModeUI() {
		seconds = timeLimitModeInput.value % 60;
		minutes = Math.floor(timeLimitModeInput.value / 60);
		scoreText.style.display = 'none';

		// make the word list long enough so that no human typer can reach the end
		scoreMax = timeLimitModeInput.value * 4;

		// toggle value of word limit mode button
		wordLimitModeButton.checked = !wordLimitModeButton.checked;

		// toggle display of input fields
		timeLimitModeInput.classList.toggle('noDisplay');
		wordLimitModeInput.classList.toggle('noDisplay');
	}

	// time limit mode button; if this is checked, uncheck button for word limit and vice versa
	timeLimitModeButton.addEventListener('click', () => {
		if (timeLimitMode == true) {
			timeLimitModeButton.checked = true;
		} else {
			// change mode logic here
			timeLimitMode = true;
			toggleTimeLimitModeUI();
			localStorage.setItem('timeLimitMode', timeLimitMode);
			reset();
		}
	});

	// time limit mode field
	timeLimitModeInput.addEventListener('change', () => {
		let wholeSecond = Math.floor(timeLimitModeInput.value);

		scoreMax = wholeSecond * 10;

		if (wholeSecond < 1 || wholeSecond > 10000) {
			wholeSecond = 60
		}

		// set the dom element to a whole number (in case the user puts in a decimal)
		timeLimitModeInput.value = wholeSecond;

		seconds = wholeSecond % 60;
		minutes = Math.floor(wholeSecond / 60);


		gameOn = false;
		resetTimeText();
	});

	// word Limit mode butto; if this is checked, uncheck button for time limit and vice versa
	// Toggle display of word limit mode input field
	wordLimitModeButton.addEventListener('click', () => {
		if (timeLimitMode == false) {
			wordLimitModeButton.checked = true;
		} else {
			// change mode logic here
			timeLimitMode = false;
			seconds = 0;
			minutes = 0;
			scoreText.style.display = 'flex';

			// set score max back to the chosen value
			scoreMax = wordLimitModeInput.value;

			// toggle value of time limit mode button
			timeLimitModeButton.checked = !timeLimitModeButton.checked;

			// toggle display of input fields
			timeLimitModeInput.classList.toggle('noDisplay');
			wordLimitModeInput.classList.toggle('noDisplay');

			localStorage.setItem('timeLimitMode', timeLimitMode);

			reset();
		}
	});

	// word Limit input field
	wordLimitModeInput.addEventListener('change', () => {
		if (wordLimitModeInput.value > 10 && wordLimitModeInput.value <= 500) {
			wordLimitModeInput.value = Math.ceil(wordLimitModeInput.value / 10) * 10;
			scoreMax = wordLimitModeInput.value;
		} else if (wordLimitModeInput.value > 500) {
			scoreMax = 500;
			wordLimitModeInput.value = 500;
		} else {
			scoreMax = 10;
			wordLimitModeInput.value = 10;
		}

		reset();
	});

	// word scrolling mode 
	function toggleWordScrollingModeUI() {
		prompt.classList.toggle('paragraph');
		// remove fade from parent
		document.querySelector('#fadeElement').classList.toggle('fade');
	}

	wordScrollingModeButton.addEventListener('click', () => {
		wordScrollingMode = !wordScrollingMode;
		localStorage.setItem('wordScrollingMode', wordScrollingMode);
		toggleWordScrollingModeUI();
		reset();
	});

	// punctuation mode 
	punctuationModeButton.addEventListener('click', () => {
		// console.log('punctuation mode toggled');
		// if turning punctuation mode on
		if (punctuation == "") {
			punctuation = "'.-";
		} else { // if turning punctuation mode off
			punctuation = "";
		}

		localStorage.setItem('punctuation', punctuation);

		createTestSets();
		updateCheatsheetStyling(currentLevel);
		reset();


	});


	/*______________________preference menu______________________*/
	/*___________________________________________________________*/



	/*___________________________________________________________*/
	/*______________listeners for custom ui input________________*/

	function updateLayoutUI() {
		// if custom input is selected, show the ui for custom keyboards
		if (currentLayout == 'custom') {
			openUIButton.style.display = 'block';
			startCustomKeyboardEditing();
		} else {
			customInput.style.transform = 'scaleX(0)';
			openUIButton.style.display = 'none';
		}
		// change keyboard map and key dictionary
		keyboardMap = layoutMaps[currentLayout];
		letterDictionary = levelDictionaries[currentLayout];

		if (currentLayout == 'custom') {
			customUIKeyInput.focus();
		}

	}

	// listens for layout change
	select.addEventListener('change', (e) => {
		currentLayout = select.value;
		localStorage.setItem('currentLayout', currentLayout);
		updateLayoutUI();
		// reset everything
		init();
	});

	// listener for custom layout ui open button
	openUIButton.addEventListener('click', () => {
		startCustomKeyboardEditing();
	});

	// called whenever a user opens the custom editor. Sets correct displays and saves an initial state
	// of the keyboard to refer back to if the user wants to discard changes
	function startCustomKeyboardEditing() {
		initialCustomKeyboardState = Object.assign({}, layoutMaps['custom']);
		initialCustomLevelsState = Object.assign({}, levelDictionaries['custom']);
		// customInput.style.display = 'flex';
		customInput.style.transform = 'scaleX(1)';
		let k = document.querySelector('.defaultSelectedKey');
		selectInputKey(k);
	}

	// selects an input key on the custom keyboard and applies the correct styling
	function selectInputKey(k) {
		// clear previous styling
		clearSelectedInput();

		k.classList.add('selectedInputKey');
		if (k.children[0].innerHTML == '') {
			k.children[0].innerHTML = '_';
		}
		k.children[0].classList.add('pulse');
		customUIKeyInput.focus();
	}

	// listener for the custom layout ui 'done' button
	saveButton.addEventListener('click', () => {
		customInput.style.transform = 'scaleX(0)';
		// remove active class from current key
		clearSelectedInput();
		init();
	});

	// listener for the custom layout ui 'done' button
	discardButton.addEventListener('click', () => {
		customInput.style.transform = 'scaleX(0)';
		// remove active class from current key
		clearSelectedInput();


		// load the old layout to revert changes, aka discard changes
		loadCustomLayout(initialCustomKeyboardState);
		loadCustomLevels(initialCustomLevelsState);

		// console.log(levelDictionaries.custom);

		init();
	});

	// general click listener
	document.addEventListener('click', function (e) {

		// close preference menu if click is anywhere other than the preference menu
		let k = e.target.closest('.preferenceMenu');
		if (!k) {
			k = e.target.closest('.preferenceButton');
		}
		if (!k) {
			closeMenu();
		}


		// add key listeners for each of the keys the custom input ui
		// When clicked, a key becomes 'selectedInputKey' and all others lose
		// this class. 
		k = e.target.closest('.cKey');
		if (k) {
			// change focus to the customUIKeyInput field
			customUIKeyInput.focus();

			// remove 'selectedInputKey' from any keys previously clicked
			clearSelectedInput();

			k.classList.add('selectedInputKey');
			if (k.children[0].innerHTML == '') {
				k.children[0].innerHTML = '_';
			}
			k.children[0].classList.add('pulse');
		}

		k = e.target.closest('.customUILevelButton');



		// listener for customUILevelButtons
		if (k) {
			// remove styling from other buttons
			let currentSelectedLevel = document.querySelector('.currentCustomUILevel');
			if (currentSelectedLevel) {
				currentSelectedLevel.classList.remove('currentCustomUILevel');;
			}

			// add styling to selected button
			customUIKeyInput.focus();
			k.classList.add('currentCustomUILevel');
			// set new dom element
			currentSelectedLevel = document.querySelector('.currentCustomUILevel');

			// remove styling from all keys that don't correspond with selected level button
			// add styling to keys that correspond with selected level button
			let allCKeys = document.querySelectorAll('.cKey');
			for (n of allCKeys) {
				if (n.children[0].innerHTML != 0 &&
					levelDictionaries['custom'][currentSelectedLevel.innerHTML].includes(n.children[0].innerHTML)) {
					n.classList.add('active');
				} else {
					n.classList.remove('active');
				}
			}

		}

	}, false);


	// listener for custom input field. Updates on any input, clearing the current selected
	// input key, and setting the new value
	customUIKeyInput.addEventListener('keydown', (e) => {
		let k = document.querySelector('.selectedInputKey');

		// if there was already a value for this key, remove it from all levels
		if (k.children[0].innerHTML != '_') {
			removeKeyFromLevels(k);
		}


		// if key entered is not shift, control, space, caps, enter, backspace, escape, 
		// or delete, left or right arrows, update dom element and key mapping value
		if (e.keyCode != 16 && e.keyCode != 17 && e.keyCode != 27 && e.keyCode != 46 && e.keyCode
			!= 32 && e.keyCode != 8 && e.keyCode != 20 && e.keyCode != 13 && e.keyCode != 37
			&& e.keyCode != 39 && e.keyCode != 38 && e.keyCode != 40) {
			let currentUILev = document.querySelector('.currentCustomUILevel').innerHTML;
			k.children[0].innerHTML = e.key;

			// // if we are not already on shift layer, add to dom element shift layer
			// if(!shiftDown) {
			// 	// document.querySelector('#shift' + k.id).children[0].innerHTML = e.key.toUpperCase();
			// }
			k.classList.add('active');


			// new keyMapping Data
			if (k.id) {
				let keyCode = k.id.toString().replace('custom', '');
				keyCode = keyCode.toString().replace('shift', '');
				if (!shiftDown) {
					layoutMaps.custom[keyCode] = e.key;
				}

				layoutMaps.custom.shiftLayer[keyCode] = e.key.toUpperCase();
			}

			//new levels data
			levelDictionaries['custom'][currentUILev] += e.key;
			levelDictionaries['custom']['lvl7'] += e.key;
			//console.log('new key ' + currentUILev + e.key);

			// associate the key element with the current selected level

			// this updates the main keyboard in real time. Could be ommited if performance needs a boost
			updateCheatsheetStyling(currentLevel);

			// switch to next input key
			switchSelectedInputKey('right');
		} else if (e.keyCode == 8 || e.keyCode == 46) {
			// switchSelectedInputKey('left');
			// if backspace, remove letter from the ui element and the keyboard map
			k.children[0].innerHTML = '_';
			k.classList.remove('active');
			layoutMaps.custom.shiftLayer[k.id] = " ";

			// remove deleted letter from keymapping and levels
			if (k.id) {
				//console.log('key added to mapping ' + e.key);
				layoutMaps.custom[k.id] = ' ';
				removeKeyFromLevels(k);
			}
		} else if (e.keyCode == 37) {
			switchSelectedInputKey('left');
		} else if (e.keyCode == 39) {
			// console.log('right');
			switchSelectedInputKey('right');
		} else if (e.keyCode == 38) {
			// console.log('up');
			switchSelectedInputKey('up');
		} else if (e.keyCode == 40) {
			// console.log('down');
			switchSelectedInputKey('down');
		}

		// clear input field
		customUIKeyInput.value = '';
	});

	// given a key object, k, remove a value of the letter on k from all levels
	function removeKeyFromLevels(k) {
		let lvls = Object.keys(levelDictionaries['custom']);
		for (lvl of lvls) {
			let keyCode = k.id.toString().replace('custom', '');
			//console.log(levelDictionaries.custom.lvl[keyCode]);
			// replace any instances of letter previously found on key
			levelDictionaries['custom'][lvl] = levelDictionaries['custom'][lvl].replace(k.children[0].innerHTML, '');
			// replace mapping for letter previously found on key
			layoutMaps['custom'][keyCode] = " ";
		}
	}

	// sets the custom keyboard layout to be equal to the json parameter passed in
	function loadCustomLayout(newCustomLayout) {
		// console.log('new layout');
		layoutMaps.custom = Object.assign({}, newCustomLayout);
		keyboardMap = layoutMaps.custom;

		let customKeys = document.querySelectorAll('.cKey');
		// load letters onto the custom ui input keyboard
		customKeys.forEach((cKey) => {
			let currentKeyName = cKey.id.substring(6);
			// console.log(currentKeyName);

			// if the value of the new layout key is not undefined, set it to the corresponding dom element
			if (keyboardMap[currentKeyName]) {
				// if key is blank, remove active styling
				if (keyboardMap[currentKeyName] == " ") {
					cKey.classList.remove('active');
				}
				cKey.innerHTML = `
				<span class='letter'>` + keyboardMap[currentKeyName] + `</span>
			`;
			}
		});
	}

	// sets the custom levels to be equal to the json parameter passed in
	function loadCustomLevels(newCustomLevels) {
		levelDictionaries.custom = Object.assign({}, newCustomLevels);
		letterDictionary = levelDictionaries['custom'];
	}

	// switches the focus to the next input key, determined by the direction parameter
	// Parameter is either left, right, up, or down
	function switchSelectedInputKey(direction) {
		let k; // the key to jump to
		if (direction == 'right') {
			k = document.querySelector('.selectedInputKey').nextElementSibling;
		} else if (direction == 'left') {
			k = document.querySelector('.selectedInputKey').previousElementSibling;
		} else if (direction == 'up') {
			let keyPosition;
			let currentKey = document.querySelector('.selectedInputKey');
			for (let i = 0; i < currentKey.parentElement.children.length; i++) {
				if (currentKey.parentElement.children[i] == currentKey) {
					// console.log('found! ' + i);
					keyPosition = i;
					break;
				}
			}
			k = document.querySelector('.selectedInputKey').parentElement.previousElementSibling.children[keyPosition];
		} else if (direction == 'down') {
			let keyPosition;
			let currentKey = document.querySelector('.selectedInputKey');
			for (let i = 0; i < currentKey.parentElement.children.length; i++) {
				if (currentKey.parentElement.children[i] == currentKey) {
					// console.log('found! ' + i);
					keyPosition = i;
					break;
				}
			}
			k = document.querySelector('.selectedInputKey').parentElement.nextElementSibling.children[keyPosition];
		}

		if (k.classList.contains('finalKey')) {
			//if last valid key on keyboard, don't change keysz
			k = document.querySelector('.selectedInputKey');
		} else if (k.classList.contains('rowEnd')) {
			// if last valid key on row, move down a row
			k = document.querySelector('.selectedInputKey').parentElement.nextElementSibling.children[1];
		} else if (k.classList.contains('rowStart')) {
			// if first valid key on row, move up a row
			k = document.querySelector('.selectedInputKey').parentElement.previousElementSibling.children[11];
		}

		clearSelectedInput();
		k.classList.add('selectedInputKey');
		if (k.children[0].innerHTML == "") {
			k.children[0].innerHTML = "_";
		}
		k.children[0].classList.add('pulse');
	}

	// remove 'selectedInputKey' from any keys previously clicked
	function clearSelectedInput() {
		let k = document.querySelector('.selectedInputKey');
		if (k) {
			k.classList.remove('selectedInputKey');
			k.children[0].classList.remove('pulse');
			// console.log(k.children[0].innerHTML);
			if (k.children[0].innerHTML == "_") {
				k.children[0].innerHTML = "";
			}
		}
	}

	/*______________listeners for custom ui input________________*/
	/*___________________________________________________________*/





	// input key listener
	input.addEventListener('keydown', (e) => {

		// removes first line on the first letter of the first word of a new line
		if (deleteLatestWord) {
			prompt.classList.remove('smoothScroll');
			// delete last line fromt prompt and set the offset back to 0
			prompt.firstChild.removeChild(prompt.firstChild.firstChild);
			if (prompt.firstChild.children.length == 0) {
				prompt.removeChild(prompt.firstChild);
			}
			promptOffset = 0;
			prompt.style.left = '-' + promptOffset + 'px';
			deleteLatestWord = false;
		}


		/*___________________________________________________*/
		/*____________________key mapping____________________*/

		// get rid of default key press. We'll handle it ourselves
		e.preventDefault();


		// this is the actual character typed by the user
		let char = e.code;

		// prevent default char from being typed and replace new char from keyboard map
		if (localStorage.getItem('keyRemapping') === 'true') {
			if (char in keyboardMap && gameOn) {
				if (!e.shiftKey) {
					input.value += keyboardMap[char];
				} else {
					// if shift key is pressed, get final input from
					// keymap shift layer. If shiftlayer doesn't exist
					// use a simple toUpperCase
					if (keyboardMap.shiftLayer == 'default') {
						input.value += keyboardMap[char].toUpperCase();
					} else {
						// get char from shiftLayer
						input.value += keyboardMap.shiftLayer[char];
					}
				}
			}
		} else {
			//console.log(e.keyCode);
			//console.log(specialKeyCodes.includes(e.keyCode));
			// there is a bug on firefox that occassionally reads e.key as process, hence the boolean expression below
			if (!specialKeyCodes.includes(e.keyCode) || e.keyCode > 48 && e.key != "Process") {
				// console.log('Key: ' + e.key);
				if (e.key != "Process") {
					input.value += e.key;
				} else {
					letterIndex--;
				}
			} else {
				//console.log('special Key');
			}
			if (e.keyCode == 32) {
				//console.log('space bar');
				//input.value += " ";
			}
		}

		/*____________________key mapping____________________*/
		/*___________________________________________________*/


		/*_________________________________________________________________________*/
		/*____________________listener for space and enter keys____________________*/
		// listens for the enter  and space key. Checks to see if input contains the
		// correct word. If yes, generate new word. If no, give user
		// negative feedback

		// if on the last word, check every letter so we don't need a space to end the game
		if (!timeLimitMode && score == scoreMax - 1 && checkAnswer() && gameOn) {
			// console.log('game over');
			endGame();
		}

		if (e.keyCode === 13 || e.keyCode === 32) {
			if (checkAnswer() && gameOn) {

				// stops a ' ' character from being put in the input bar
				// it wouldn't appear until after this function, and would
				// still be there when the user goes to type the next word
				e.preventDefault();

				handleCorrectWord();

				// update scoreText
				updateScoreText();

				// end game if score == scoreMax
				if (score >= scoreMax) {
					endGame();
				}

				// clear input field
				document.querySelector('#userInput').value = '';

				// set letter index (where in the word the user currently is)
				// to the beginning of the word
				letterIndex = 0;

			} else {
				// console.log('error space');
				input.value += " ";
				letterIndex++;
			}
		}// end keyEvent if statement

		/*____________________listener for space and enter keys____________________*/
		/*_________________________________________________________________________*/



		/*_________________________________________________________*/
		/*____________________accuracy checking____________________*/

		// if we have a backspace, decrement letter index and role back the input value
		if (e.keyCode == 8) {
			//console.log('backspace');
			input.value = input.value.substr(0, input.value.length - 1);
			letterIndex--;
			// letter index cannot be < 0
			if (letterIndex < 0) {
				letterIndex = 0;
			}
		}

		// if key produces a character, (ie not shift, backspace, or another 
		// utility key) increment letter index
		if (!specialKeyCodes.includes(e.keyCode) || e.keyCode > 48) {
			letterIndex++;
		}

		// check if answer is correct and apply the correct styling. 
		// Also increment 'errors' or 'correct'
		if (checkAnswerToIndex()) {
			input.style.color = 'black';
			// no points awarded for backspace
			if (e.keyCode != 8) {
				correct++;
				// if letter (in the promp) exists, color it green
				if (prompt.children[0].children[wordIndex].children[letterIndex - 1]) {
					prompt.children[0].children[wordIndex].children[letterIndex - 1].style.color = 'green';
				}
			} else {
				// if backspace, color it grey again
				if (prompt.children[0].children[wordIndex].children[letterIndex]) {
					prompt.children[0].children[wordIndex].children[letterIndex].style.color = 'gray';
				}
			}
		} else {
			// console.log('error');
			input.style.color = 'red';
			// no points awarded for backspace
			if (e.keyCode != 8) {
				errors++;
				if (prompt.children[0].children[wordIndex].children[letterIndex - 1]) {
					prompt.children[0].children[wordIndex].children[letterIndex - 1].style.color = 'red';
				}
			} else {
				// if backspace, color it grey again
				if (prompt.children[0].children[wordIndex].children[letterIndex]) {
					prompt.children[0].children[wordIndex].children[letterIndex].style.color = 'gray';
				}
			}
		}

		//console.log('errors: ' + errors + ' \n correct: ' + correct);
		//console.log("accuracy: " + correct/(errors+correct));

		/*____________________accuracy checking____________________*/
		/*_________________________________________________________*/



	}); // end input key listner


	// returns true if the letters typed SO FAR are correct
	function checkAnswerToIndex() {
		// user input
		let inputVal = input.value;

		// console.log('checking input ' +inputVal.slice(0,letterIndex) + "!");
		// console.log(correctAnswer.slice(0,letterIndex)+ "!");
		return inputVal.slice(0, letterIndex) == correctAnswer.slice(0, letterIndex);
	}


	// add event listeners to level buttons
	for (let button of buttons) {
		let b = button;
		b.addEventListener('click', () => {
			let lev = b.innerHTML.replace(/ /, '').toLowerCase();
			// int representation of level we are choosing
			lev = (lev[lev.length - 1]);
			if (b.innerHTML == 'All Words') {
				lev = 7;
			} else if (b.innerHTML == 'Full Sentences') {
				lev = 8;
			}
			switchLevel(lev);
		});
	}

	// switches to level 
	function switchLevel(lev) {
		localStorage.setItem('currentLevel', lev);
		// console.log(lev);
		// stop timer
		gameOn = false;

		// clear input field
		document.querySelector('#userInput').value = '';

		// clear highlighted buttons
		clearCurrentLevelStyle();
		// console.log('.lvl'+lev);
		document.querySelector('.lvl' + lev).classList.add('currentLevel');

		// set full sentence mode to true
		if (lev == 8) {
			fullSentenceMode = true;
		} else {
			fullSentenceMode = false;
		}

		if (lev == 8) {
			lev = 7;
		}

		// window[] here allows us to select the variable levelN, instead of
		// setting currentLevelList to a string
		currentLevel = lev;

		// reset everything
		reset();

		// take care of styling for the cheatsheet
		updateCheatsheetStyling(lev);
	}

	// updates all styling for the cheatsheet by first resetting all keys,
	// then styling those in active levels. takes the current level (int) as a parameter
	function updateCheatsheetStyling(level) {

		// loop through all buttons
		let allKeys = document.querySelectorAll('.key');
		for (let n of allKeys) {
			//reset all keys to default
			n.classList.add('inactive');
			n.classList.remove('active');
			n.classList.remove('homeRow');
			n.classList.remove('currentLevelKeys');
			n.classList.remove('punctuation');
			n.innerHTML = `
			<span class='letter'></span>
		`

			// set of keys to loop through the letter dictionary, which
			// contains info about which levels each key appears at
			let objKeys = Object.keys(letterDictionary);

			// check active levels and apply styling
			for (let i = 0; i < level; i++) {

				// the letter that will appear on the key
				let letter = keyboardMap[n.id];

				let lettersToCheck = letterDictionary[objKeys[i]] + punctuation;

				if (lettersToCheck.includes(letter)) {
					n.innerHTML = `
					<span class='letter'>`+ letter + `</span>
				`
					n.classList.remove('inactive');
					if (punctuation.includes(letter)) {
						n.classList.remove('active');
						n.classList.add('punctuation');
					} else if (i == 0) {
						n.classList.add('homeRow');
					} else if (i == 6) {
						// all words selected
					} else if (i == level - 1) {
						n.classList.remove('active');
						n.classList.add('currentLevelKeys');
					} else {
						n.classList.add('active');
					}
				}
			}

		}
	}

	// listener for keyboard mapping toggle switch
	mappingStatusButton.addEventListener('click', () => {
		if (localStorage.getItem('keyRemapping') === 'true') {
			// change the status text
			mappingStatusText.innerText = 'off';
			localStorage.setItem('keyRemapping', false);

		} else {
			// change the status text
			mappingStatusText.innerText = 'on';
			localStorage.setItem('keyRemapping', true);
		}

		// change focus back to input
		input.focus();
	});

	// resetButton listener
	resetButton.addEventListener('click', () => {
		// console.log('reset button called');
		reset();
	});


	/*________________OTHER FUNCTIONS___________________*/

	// resets everything to the beginning of game state. Run when the reset
	// button is called or when a level is changed
	// Set a new prompt word and change variable text
	function reset() {

		deleteFirstLine = false; // make this true every time we finish typing a line
		deleteLatestWord = false;

		prompt.innerHTML = '';
		answerString = '';
		input.value = '';
		answerWordArray = [];


		idCount = 0;

		sentenceStartIndex = -1;


		// stop the timer
		gameOn = false;


		// console.log('reset called');
		// set current letter index back to 0
		letterIndex = 0;
		wordIndex = 0;
		lineIndex = 0;

		// prompt offset back to 0
		promptOffset = 0;
		prompt.style.left = 0;

		// set correct and errors counts to 0
		correct = 0;
		errors = 0;

		// set to -1 before each game because score is incremented every time we call
		// updateScoreText(), including on first load
		score = -1;

		requiredLetters = (levelDictionaries[currentLayout]['lvl' + currentLevel] + punctuation).split("");

		// reset clock
		if (!timeLimitMode) {
			minutes = 0;
			seconds = 0;
		} else {
			seconds = timeLimitModeInput.value % 60;
			minutes = Math.floor(timeLimitModeInput.value / 60);
		}

		// reset timeText
		resetTimeText();

		// set mapping to off

		// set accuracyText to be transparent
		testResults.classList.add('transparent');

		// no display for reset button during game
		resetButton.classList.add('noDisplay');

		//set prompt to visible
		prompt.classList.remove('noDisplay');


		for (let i = 1; i <= 3; i++) {
			addLineToPrompt();
			if (i == 1) {
				correctAnswer = answerWordArray[0];
			}
		}

		// answerLetterArray seems to be unused ¯\_(ツ)_/¯
		// answerLetterArray = answerString.split('');
		//reset prompt

		// change the 0/50 text
		updateScoreText();

		// change focus to the input field
		input.focus();
	}

	// generates a new line, adds it to prompt, and to answerWordArray
	function addLineToPrompt() {
		let lineToAdd = generateLine(scoreMax - score - answerWordArray.length - 1);
		answerString += lineToAdd;
		prompt.innerHTML += convertLineToHTML(lineToAdd);
		answerWordArray = answerWordArray.concat(lineToAdd.split(' '));
	}

	// takes an array of letter and turns them into html elements representing lines
	// and words. These will be used as the prompt, which can then be styled accordingly
	function convertLineToHTML(letters) {
		let promptString = "";

		promptString = "<span class='line'><span class='word' id='id" + idCount + "'>";
		// loop through all letters in prompt
		for (let i = 0; i <= letters.length; i++) {
			//console.log(letters[i]);

			// if last word in the list, close out the final word span tag
			if (i == letters.length) {
				promptString += "</span> </span>";
				idCount++;
			} else if (letters[i] == " ") {
				// if letter is a space, that means we have a new word
				//console.log('new word');
				idCount++;
				promptString += " </span>"
				promptString += "<span class='word' id='id" + idCount + "'>";
			} else {
				promptString += `<span>` + letters[i] + `</span>`;
			}

		}
		return promptString;
	}

	function checkAnswer() {
		// console.log('correct answer: ' + correctAnswer);
		// user input
		let inputVal = input.value;

		return inputVal == correctAnswer;
	}



	function endGame() {
		// erase prompt
		prompt.classList.toggle('noDisplay');

		// make resetButton visible
		resetButton.classList.remove('noDisplay');

		// pause timer
		gameOn = false;

		// calculate wpm
		let wpm;
		if (!timeLimitMode) {
			wpm = (((correct + errors) / 5) / (minutes + (seconds / 60))).toFixed(2);
		} else {
			wpm = (((correct + errors) / 5) / (timeLimitModeInput.value / 60)).toFixed(2);
		}
		// set accuracyText
		accuracyText.innerHTML = "Accuracy: " + ((100 * correct) / (correct + errors)).toFixed(2) + '%';
		wpmText.innerHTML = 'WPM: ' + wpm;
		// make accuracy visible
		testResults.classList.toggle('transparent');

		// set correct and errors counts to 0
		correct = 0;
		errors = 0;

		// change focus to resetButton
		resetButton.focus();


		// update scoreText
		updateScoreText();
		// clear input field
		document.querySelector('#userInput').value = '';
		// set letter index (where in the word the user currently is)
		// to the beginning of the word
		letterIndex = 0;
	}

	// generates a single line to be appended to the answer array
	// if a line with a maximum number of words is desired, pass it in as a parameter
	function generateLine(maxWords) {
		let str = '';

		if (fullSentenceMode) {
			// let rand = Math.floor(Math.random()*35);
			let rand = 0;
			if (sentenceStartIndex == -1) {
				sentenceStartIndex = getPosition(sentence, '.', rand) + 1;
				sentenceEndIndex = sentence.substring(sentenceStartIndex + lineLength + 2).indexOf(" ") +
					sentenceStartIndex + lineLength + 1;
				str = sentence.substring(sentenceStartIndex, sentenceEndIndex + 1);
			} else {

				sentenceStartIndex = sentenceEndIndex + 1;
				sentenceEndIndex = sentence.substring(sentenceStartIndex + lineLength + 2).indexOf(" ") +
					sentenceStartIndex + lineLength + 1;
				str = sentence.substring(sentenceStartIndex, sentenceEndIndex + 1);
				// console.log(sentenceStartIndex);
				// console.log(sentenceEndIndex);
			}
			str = str.substring(1);
			return str;
		}


		if (wordLists['lvl' + currentLevel].length > 0) {
			let startingLetters = levelDictionaries[currentLayout]['lvl' + currentLevel] + punctuation;

			//requiredLetters = startingLetters.split(''); 

			// if this counter hits a high enough number, there are likely no words matching the search
			// criteria. If that happens, reset required letters
			let circuitBreaker = 0;

			let wordsCreated = 0;

			for (let i = 0; i < lineLength; i = i) {
				if (wordsCreated >= maxWords) {
					break;
				}

				let rand = Math.floor(Math.random() * wordLists['lvl' + currentLevel].length);
				let wordToAdd = wordLists['lvl' + currentLevel][rand];


				//console.log('in circuit ' + circuitBreaker);
				if (circuitBreaker > 12000) {
					if (circuitBreaker > 30000) {
						str += levelDictionaries[currentLayout]['lvl' + currentLevel] + ' ';
						i += wordToAdd.length;
						wordsCreated++;
						circuitBreaker = 0;
						requiredLetters = startingLetters.split('');
						// console.log('taking too long to find proper word');
					} else {
						requiredLetters = startingLetters.split('');
					}
				}

				// if the word does not contain any required letters, throw it out and choose again
				if (!contains(wordToAdd, requiredLetters)) {

					// console.log(wordToAdd + ' doesnt have any required letters from ' + requiredLetters);
				} else if (onlyLower && containsUpperCase(wordToAdd)) {
					// if only lower case is allowed and the word to add contains an uppercase,
					// throw out the word and try again

				} else {
					// if last word of the line, don't add a space
					str += wordToAdd + ' ';
					i += wordToAdd.length;
					wordsCreated++;


					// remove any new key letters from our required list
					removeIncludedLetters(requiredLetters, wordToAdd);
					// if we have used all required letters, reset it
					if (requiredLetters.length == 0) {
						requiredLetters = startingLetters.split('');
					}
				}

				circuitBreaker++;
				// if we're having trouble finding a word with a require letter, reset 'required letters'
				if (circuitBreaker > 7000) {
					// console.log('couldnt find word with ' + requiredLetters);
					wordToAdd = randomLetterJumble();
					str += wordToAdd + ' ';
					i += wordToAdd.length;
					wordsCreated++;
					requiredLetters = startingLetters.split('');
				}
			}
		} else {
			let startingLetters = levelDictionaries[currentLayout]['lvl' + currentLevel] + punctuation;
			// if there are no words with the required letters, all words should be set to the
			// current list of required letters
			let wordsCreated = 0;
			if (levelDictionaries[currentLayout]['lvl' + currentLevel].length == 0) {
				str = "";
			} else {
				for (let i = 0; i < lineLength; i = i) {
					const wordToAdd = randomLetterJumble();
					str += wordToAdd + ' ';
					i += wordToAdd.length;
					// console.log("i: " + i);
					wordsCreated++;
					if (wordsCreated >= maxWords) {
						break;
					}
				}
			}
		}

		// line should not end in a space. Remove the final space char
		str = str.substring(0, str.length - 1);
		return str;
	}

	// creates a random jumble of letters to be used when no words are found for a target letter
	function randomLetterJumble() {
		let randWordLength = Math.floor(Math.random() * 5) + 1;
		let jumble = "";
		for (let i = 0; i < randWordLength; i++) {
			let rand = Math.floor(Math.random() * levelDictionaries[currentLayout]['lvl' + currentLevel].length);
			jumble += levelDictionaries[currentLayout]['lvl' + currentLevel][rand];
		}

		return jumble;
	}


	// takes an array and removes any required letters that are found in 'word'
	// for example, if required letters == ['a', 'b', 'c', 'd'] and word=='cat', this
	// function will turn requiredLetters into ['b', 'd'] 
	function removeIncludedLetters(requiredLetters, word) {
		word.split('').forEach((l) => {
			if (requiredLetters.includes(l)) {
				requiredLetters.splice(requiredLetters.indexOf(l), 1);
				// console.log('removal: '+ word+ ' ' + l + ' '+ requiredLetters);
			}
		});
	}

	// if 'word' contains an uppercase letter, return true. Else return false
	function containsUpperCase(word) {
		let upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
		let result = false;
		word.split('').forEach((letter) => {
			if (upperCase.includes(letter)) {
				// console.log('upperCase ' + letter);
				result = true;
			}
		});
		return result;
	}

	// updates the correct answer and manipulates the dom
	// called every time a correct word is typed
	function handleCorrectWord() {
		// make sure no 'incorrect' styling still exists
		input.style.color = 'black';

		//remove the first word from the answer string
		answerWordArray.shift();

		if (prompt.children[0].children.length - 1 == 0 || wordIndex >= prompt.children[0].children.length - 1) {
			// console.log('new line ' + prompt);
			lineIndex++;

			// when we reach the end of a line, generate a new one IF 
			// we are more than  2 lines from from the end. This ensures that
			// no extra words are generated when we near the end of the test

			addLineToPrompt();

			//make the first line of the prompt transparent
			if (!wordScrollingMode) {
				prompt.removeChild(prompt.children[0]);
				wordIndex = -1;
			}
		}

		let cur = document.querySelector('#id' + (score + 1));

		if (wordScrollingMode) {
			deleteLatestWord = true;
			// update display
			prompt.classList.add('smoothScroll');
			// set the offset value of the next word
			promptOffset += prompt.children[0].children[0].offsetWidth;
			// move prompt left
			prompt.style.left = '-' + promptOffset + 'px';
			// make already typed words transparent
			prompt.children[0].firstChild.style.opacity = 0;
		} else {
			// if in paragraph mode, increase word index
			wordIndex++;
		}


		// save the correct answer to a variable before removing it 
		// from the answer string
		correctAnswer = answerWordArray[0];

	}

	// updates the numerator and denominator of the scoretext on 
	// the document
	function updateScoreText() {
		scoreText.innerHTML = ++score + "/" + scoreMax;
	}

	function resetTimeText() {
		timeText.innerHTML = minutes + 'm :' + seconds + ' s';
	}

	// removes currentLevel styles from all buttons. Use every time the 
	// level is changed
	function clearCurrentLevelStyle() {
		Array.from(buttons).forEach(function (button) {
			button.classList.remove('currentLevel');
		});
	}

	// set the word list for each level
	function createTestSets() {
		let objKeys = Object.keys(wordLists); // the level keys of each of the wordLists
		let includedLetters = punctuation; // the list of letters to be included in each level

		// for each level, add new letters to the test set and create a new list
		for (let i = 0; i < objKeys.length; i++) {
			let requiredLetters;


			// if 'all words' on a custom layout, don't add letters from the dictionary, because 
			// level 7 contains the whole alphabet, and the user might not have asigned every letter to
			// a key. Instead, this level should be the same as the previous, just with every letter required
			if (currentLayout != "custom" || i != 6) {
				requiredLetters = levelDictionaries[currentLayout]['lvl' + (i + 1)] + punctuation;
				includedLetters += letterDictionary[objKeys[i]];
			} else {
				requiredLetters = includedLetters;
			}

			wordLists[objKeys[i]] = [];
			//console.log('level ' +(i+1) + ": " + wordLists[objKeys[i]]);
			wordLists[objKeys[i]] = generateList(includedLetters, requiredLetters);
			// if(i == 6) console.log('level ' +(i+1) + ": " + wordLists[objKeys[i]]);
		}
	}

	// fixes a small bug in mozilla
	document.addEventListener('keyup', (e) => {
		e.preventDefault();
		//console.log('prevented');
	});

}

export default app