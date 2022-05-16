export const alphabet = "abcdefghijklmnopqrstuvwxyz";

export const levelLetterSets = {
  azerty: ["qsdfjklm", "gh", "azer", "tycv", "uiop", "wxbn", alphabet],
  dvorak: ["aoeuhtns", "id", "pyfg", "kxbm", "crlw", "qjvz", alphabet],
  colemak: ["arstneio", "dh", "pgjl", "cvbk", "wfuy", "qzxm", alphabet],
  colemakdh: ["arstneio", "dh", "wfyu", "plgm", "bcvk", "qxjz", alphabet],
  lefthandeddvorak: [
    "dtheac",
    "yurso",
    "gvwni",
    "mljc",
    "qbkx",
    "pfz",
    alphabet,
  ],
  qwerty: ["asdfer", "jkliuo", "ghty", "qwzx", "nmp", "cvb", alphabet],
  tarmak: ["arstneio", "dh", "gjvb", "qwfp", "luyz", "cxkm", alphabet],
  workman: ["ashtneoi", "gy", "bjfu", "mcvk", "plzx", "qdrw", alphabet],
  custom: ["", "", "", "", "", "", ""],
};

export const allLayoutMaps = {
  azerty: {
    "-": ")",
    "=": "=",
    q: "a",
    w: "z",
    e: "e",
    r: "r",
    t: "t",
    y: "y",
    u: "u",
    i: "i",
    o: "o",
    p: "p",
    "[": "^",
    "]": "$",
    "\\": "\\",
    a: "q",
    s: "s",
    d: "d",
    f: "f",
    g: "g",
    h: "h",
    j: "j",
    k: "k",
    l: "l",
    ";": "m",
    ñ: "m", // Support for Latin American keyboards
    ":": "M",
    "'": "ù",
    z: "<",
    x: "w",
    c: "x",
    v: "c",
    b: "v",
    n: "b",
    m: "n",
    ",": ".",
    ".": ";",
    "/": "!",
  },
  dvorak: {
    "-": "[",
    "=": "]",
    q: "'",
    w: ",",
    e: ".",
    r: "p",
    t: "y",
    y: "f",
    u: "g",
    i: "c",
    o: "r",
    p: "l",
    "[": "/",
    "]": "=",
    "\\": "\\",
    a: "a",
    s: "o",
    d: "e",
    f: "u",
    g: "i",
    h: "d",
    j: "h",
    k: "t",
    l: "n",
    ";": "s",
    ñ: "s", // Support for Latin American keyboards
    "'": "-",
    z: ";",
    x: "q",
    c: "j",
    v: "k",
    b: "x",
    n: "b",
    m: "m",
    ",": "w",
    ".": "v",
    "/": "z",
    Backquote: "`",
    1: "1",
    2: "2",
    3: "3",
    shiftLayer: {
      Q: '"',
      W: "<",
      E: ">",
      R: "P",
      T: "Y",
      Y: "F",
      U: "G",
      I: "C",
      O: "R",
      P: "L",
      "{": "?",
      A: "A",
      S: "O",
      D: "E",
      F: "U",
      G: "I",
      H: "D",
      J: "H",
      K: "T",
      L: "N",
      ":": "S",
      Z: ":",
      X: "Q",
      C: "J",
      V: "K",
      B: "X",
      N: "B",
      M: "M",
      "<": "W",
      ">": "V",
      "?": "Z",
      "!": "!",
    },
  },
  colemak: {
    "-": "-",
    "=": "=",
    q: "q",
    w: "w",
    e: "f",
    r: "p",
    t: "g",
    y: "j",
    u: "l",
    i: "u",
    o: "y",
    p: ";",
    "[": "[",
    "]": "]",
    "\\": "\\",
    a: "a",
    s: "r",
    d: "s",
    f: "t",
    g: "d",
    h: "h",
    j: "n",
    k: "e",
    l: "i",
    ";": "o",
    ñ: "o", // Support for Latin American keyboards
    ":": "O",
    "'": "'",
    z: "z",
    x: "x",
    c: "c",
    v: "v",
    b: "b",
    n: "k",
    m: "m",
    ",": ",",
    ".": ".",
    "/": "/",
  },
  colemakdh: {
    "-": "-",
    "=": "=",
    q: "q",
    w: "w",
    e: "f",
    r: "p",
    t: "b",
    y: "j",
    u: "l",
    i: "u",
    o: "y",
    p: ";",
    "[": "[",
    "]": "]",
    "\\": "\\",
    a: "a",
    s: "r",
    d: "s",
    f: "t",
    g: "g",
    h: "m",
    j: "n",
    k: "e",
    l: "i",
    ";": "o",
    ñ: "o", // Support for Latin American keyboards
    ":": "O",
    "'": "'",
    z: "z",
    x: "x",
    c: "c",
    v: "d",
    b: "v",
    n: "k",
    m: "h",
    ",": ",",
    ".": ".",
    "/": "/",
  },
  lefthandeddvorak: {
    1: "[",
    2: "]",
    3: "/",
    4: "p",
    5: "f",
    6: "m",
    7: "l",
    8: "j",
    9: "4",
    0: "3",
    "-": "2",
    "=": "1",
    q: ";",
    w: "q",
    e: "b",
    r: "y",
    t: "u",
    y: "r",
    u: "s",
    i: "o",
    o: ".",
    p: "6",
    "[": "5",
    "]": "=",
    "\\": "\\",
    a: "-",
    s: "k",
    d: "c",
    f: "d",
    g: "t",
    h: "h",
    j: "e",
    k: "a",
    l: "z",
    ";": "8",
    ñ: "8", // Support for Latin American keyboards
    "'": "7",
    z: "'",
    x: "x",
    c: "g",
    v: "v",
    b: "w",
    n: "n",
    m: "i",
    ",": ",",
    ".": "0",
    "/": "9",
  },
  tarmak: {
    "-": "1",
    "=": "=",
    q: "q",
    w: "w",
    e: "f",
    r: "p",
    t: "g",
    y: "j",
    u: "l",
    i: "u",
    o: "y",
    p: ";",
    "[": "[",
    "]": "]",
    "\\": "\\",
    a: "a",
    s: "r",
    d: "s",
    f: "t",
    g: "d",
    h: "h",
    j: "n",
    k: "e",
    l: "i",
    ";": "o",
    ñ: "o", // Support for Latin American keyboards
    "'": "'",
    z: "z",
    x: "x",
    c: "c",
    v: "v",
    b: "b",
    n: "k",
    m: "m",
    ",": ",",
    ".": ".",
    "/": "/",
  },
  qwerty: {
    "-": "-",
    "=": "=",
    q: "q",
    w: "w",
    e: "e",
    r: "r",
    t: "t",
    y: "y",
    u: "u",
    i: "i",
    o: "o",
    p: "p",
    "[": "[",
    "]": "]",
    "\\": "\\",
    a: "a",
    s: "s",
    d: "d",
    f: "f",
    g: "g",
    h: "h",
    j: "j",
    k: "k",
    l: "l",
    ";": ";",
    ñ: ";", // Support for Latin American keyboards
    "'": "'",
    z: "z",
    x: "x",
    c: "c",
    v: "v",
    b: "b",
    n: "n",
    m: "m",
    ",": ",",
    ".": ".",
    "/": "/",
  },
  workman: {
    "-": "-",
    "=": "=",
    q: "q",
    w: "d",
    e: "r",
    r: "w",
    t: "b",
    y: "j",
    u: "f",
    i: "u",
    o: "p",
    p: ";",
    "[": "[",
    "]": "]",
    "\\": "\\",
    a: "a",
    s: "s",
    d: "h",
    f: "t",
    g: "g",
    h: "y",
    j: "n",
    k: "e",
    l: "o",
    ";": "i",
    ñ: "i", // Support for Latin American keyboards
    "'": "'",
    z: "z",
    x: "x",
    c: "m",
    v: "c",
    b: "v",
    n: "k",
    m: "l",
    ",": ",",
    ".": ".",
    "/": "/",
  },
};

export const emptyCustomKeyMap = {
  "-": " ",
  "=": " ",
  q: " ",
  w: " ",
  e: " ",
  r: " ",
  t: " ",
  y: " ",
  u: " ",
  i: " ",
  o: " ",
  p: " ",
  "[": " ",
  "]": " ",
  "\\": " ",
  a: " ",
  s: " ",
  d: " ",
  f: " ",
  g: " ",
  h: " ",
  j: " ",
  k: " ",
  l: " ",
  ";": " ",
  ñ: " ", // Support for Latin American keyboards
  "'": " ",
  z: " ",
  x: " ",
  c: " ",
  v: " ",
  b: " ",
  n: " ",
  m: " ",
  ",": " ",
  ".": " ",
  "/": " ",
};

export const standardKeyboard = [
  [
    { class: "", id: "Backquote" },
    { class: "", id: "1" },
    { class: "", id: "2" },
    { class: "", id: "3" },
    { class: "", id: "4" },
    { class: "", id: "5" },
    { class: "", id: "6" },
    { class: "", id: "7" },
    { class: "", id: "8" },
    { class: "", id: "9" },
    { class: "", id: "0" },
    { class: "", id: "-" },
    { class: "", id: "=" },
    { class: "twou", id: "BackSpace" },
  ],
  [
    { class: "onepointfiveu" },
    { class: "", id: "q" },
    { class: "", id: "w" },
    { class: "", id: "e" },
    { class: "", id: "r" },
    { class: "", id: "t" },
    { class: "", id: "y" },
    { class: "", id: "u" },
    { class: "", id: "i" },
    { class: "", id: "o" },
    { class: "", id: "p" },
    { class: "", id: "[" },
    { class: "", id: "]" },
    { class: "onepointfiveu", id: "\\" },
  ],
  [
    { class: "onepointsevenfiveu" },
    { class: "homeRow", id: "a" },
    { class: "homeRow", id: "s" },
    { class: "homeRow", id: "d" },
    { class: "homeRow restingPosition", id: "f" },
    { class: "", id: "g" },
    { class: "", id: "h" },
    { class: "homeRow restingPosition", id: "j" },
    { class: "homeRow", id: "k" },
    { class: "homeRow", id: "l" },
    { class: "homeRow", id: ";" },
    { class: "", id: "'" },
    { class: "twopointtwofiveu" },
  ],
  [
    { class: "twopointtwofiveu" },
    { class: "", id: "z" },
    { class: "", id: "x" },
    { class: "", id: "c" },
    { class: "", id: "v" },
    { class: "", id: "b" },
    { class: "", id: "n" },
    { class: "", id: "m" },
    { class: "", id: "," },
    { class: "", id: "." },
    { class: "", id: "/" },
    { class: "twopointsevenfiveu" },
  ],
  [
    { class: "onepointtwofiveu" },
    { class: "onepointtwofiveu" },
    { class: "onepointtwofiveu" },
    { class: "sixpointtwofiveu", id: "mapping-status" },
    { class: "onepointtwofiveu" },
    { class: "onepointtwofiveu" },
    { class: "onepointtwofiveu" },
    { class: "onepointtwofiveu" },
  ],
];

export const columnarKeyboard = [
  [
    { class: "", id: "Backquote" },
    { class: "", id: "1" },
    { class: "", id: "2" },
    { class: "", id: "3" },
    { class: "", id: "4" },
    { class: "", id: "5" },
    { class: "gap" },
    { class: "", id: "6" },
    { class: "", id: "7" },
    { class: "", id: "8" },
    { class: "", id: "9" },
    { class: "", id: "0" },
    { class: "", id: "-" },
  ],
  [
    { class: "" },
    { class: "", id: "q" },
    { class: "", id: "w" },
    { class: "", id: "e" },
    { class: "", id: "r" },
    { class: "", id: "t" },
    { class: "gap" },
    { class: "", id: "y" },
    { class: "", id: "u" },
    { class: "", id: "i" },
    { class: "", id: "o" },
    { class: "", id: "p" },
    { class: "", id: "[" },
  ],
  [
    { class: "" },
    { class: "homeRow", id: "a" },
    { class: "homeRow", id: "s" },
    { class: "homeRow", id: "d" },
    { class: "homeRow restingPosition", id: "f" },
    { class: "", id: "g" },
    { class: "gap" },
    { class: "", id: "h" },
    { class: "homeRow restingPosition", id: "j" },
    { class: "homeRow", id: "k" },
    { class: "homeRow", id: "l" },
    { class: "homeRow", id: ";" },
    { class: "", id: "'" },
  ],
  [
    { class: "" },
    { class: "", id: "z" },
    { class: "", id: "x" },
    { class: "", id: "c" },
    { class: "", id: "v" },
    { class: "", id: "b" },
    { class: "gap" },
    { class: "", id: "n" },
    { class: "", id: "m" },
    { class: "", id: "," },
    { class: "", id: "." },
    { class: "", id: "/" },
    { class: "" },
  ],
  [
    { class: "" },
    { class: "" },
    { class: "" },
    { class: "" },
    { class: "sixpointtwofiveu", id: "mapping-status" },
    { class: "" },
    { class: "" },
    { class: "" },
    { class: "" },
  ],
];
