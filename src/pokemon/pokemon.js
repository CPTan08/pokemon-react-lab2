const POKEMON = [
  {
    "id": 1,
    "name": {
      "english": "Bulbasaur",
      "japanese": "フシギダネ",
      "chinese": "妙蛙种子"
    },
    "type": [
      "Grass",
      "Poison"
    ],
    "base": {
      "HP": 45,
      "Attack": 49,
      "Defence": 49,
      "SpAttack": 65,
      "SpDefence": 65,
      "Speed": 45
    }
  },
  {
    "id": 2,
    "name": {
      "english": "Ivysaur",
      "japanese": "フシギソウ",
      "chinese": "妙蛙草"
    },
    "type": [
      "Grass",
      "Poison"
    ],
    "base": {
      "HP": 60,
      "Attack": 62,
      "Defence": 63,
      "SpAttack": 80,
      "SpDefence": 80,
      "Speed": 60
    }
  },
  {
    "id": 3,
    "name": {
      "english": "Venusaur",
      "japanese": "フシギバナ",
      "chinese": "妙蛙花"
    },
    "type": [
      "Grass",
      "Poison"
    ],
    "base": {
      "HP": 80,
      "Attack": 82,
      "Defence": 83,
      "SpAttack": 100,
      "SpDefence": 100,
      "Speed": 80
    }
  },
  {
    "id": 4,
    "name": {
      "english": "Charmander",
      "japanese": "ヒトカゲ",
      "chinese": "小火龙"
    },
    "type": [
      "Fire"
    ],
    "base": {
      "HP": 39,
      "Attack": 52,
      "Defence": 43,
      "SpAttack": 60,
      "SpDefence": 50,
      "Speed": 65
    }
  },
  {
    "id": 5,
    "name": {
      "english": "Charmeleon",
      "japanese": "リザード",
      "chinese": "火恐龙"
    },
    "type": [
      "Fire"
    ],
    "base": {
      "HP": 58,
      "Attack": 64,
      "Defence": 58,
      "SpAttack": 80,
      "SpDefence": 65,
      "Speed": 80
    }
  },
  {
    "id": 6,
    "name": {
      "english": "Charizard",
      "japanese": "リザードン",
      "chinese": "喷火龙"
    },
    "type": [
      "Fire",
      "Flying"
    ],
    "base": {
      "HP": 78,
      "Attack": 84,
      "Defence": 78,
      "SpAttack": 109,
      "SpDefence": 85,
      "Speed": 100
    }
  },
  {
    "id": 7,
    "name": {
      "english": "Squirtle",
      "japanese": "ゼニガメ",
      "chinese": "杰尼龟"
    },
    "type": [
      "Water"
    ],
    "base": {
      "HP": 44,
      "Attack": 48,
      "Defence": 65,
      "SpAttack": 50,
      "SpDefence": 64,
      "Speed": 43
    }
  },
  {
    "id": 8,
    "name": {
      "english": "Wartortle",
      "japanese": "カメール",
      "chinese": "卡咪龟"
    },
    "type": [
      "Water"
    ],
    "base": {
      "HP": 59,
      "Attack": 63,
      "Defence": 80,
      "SpAttack": 65,
      "SpDefence": 80,
      "Speed": 58
    }
  },
  {
    "id": 9,
    "name": {
      "english": "Blastoise",
      "japanese": "カメックス",
      "chinese": "水箭龟"
    },
    "type": [
      "Water"
    ],
    "base": {
      "HP": 79,
      "Attack": 83,
      "Defence": 100,
      "SpAttack": 85,
      "SpDefence": 105,
      "Speed": 78
    }
  },
  {
    "id": 10,
    "name": {
      "english": "Caterpie",
      "japanese": "キャタピー",
      "chinese": "绿毛虫"
    },
    "type": [
      "Bug"
    ],
    "base": {
      "HP": 45,
      "Attack": 30,
      "Defence": 35,
      "SpAttack": 20,
      "SpDefence": 20,
      "Speed": 45
    }
  },
  {
    "id": 11,
    "name": {
      "english": "Metapod",
      "japanese": "トランセル",
      "chinese": "铁甲蛹"
    },
    "type": [
      "Bug"
    ],
    "base": {
      "HP": 50,
      "Attack": 20,
      "Defence": 55,
      "SpAttack": 25,
      "SpDefence": 25,
      "Speed": 30
    }
  },
  {
    "id": 12,
    "name": {
      "english": "Butterfree",
      "japanese": "バタフリー",
      "chinese": "巴大蝶"
    },
    "type": [
      "Bug",
      "Flying"
    ],
    "base": {
      "HP": 60,
      "Attack": 45,
      "Defence": 50,
      "SpAttack": 90,
      "SpDefence": 80,
      "Speed": 70
    }
  },
  {
    "id": 13,
    "name": {
      "english": "Weedle",
      "japanese": "ビードル",
      "chinese": "独角虫"
    },
    "type": [
      "Bug",
      "Poison"
    ],
    "base": {
      "HP": 40,
      "Attack": 35,
      "Defence": 30,
      "SpAttack": 20,
      "SpDefence": 20,
      "Speed": 50
    }
  },
  {
    "id": 14,
    "name": {
      "english": "Kakuna",
      "japanese": "コクーン",
      "chinese": "铁壳蛹"
    },
    "type": [
      "Bug",
      "Poison"
    ],
    "base": {
      "HP": 45,
      "Attack": 25,
      "Defence": 50,
      "SpAttack": 25,
      "SpDefence": 25,
      "Speed": 35
    }
  },
  {
    "id": 15,
    "name": {
      "english": "Beedrill",
      "japanese": "スピアー",
      "chinese": "大针蜂"
    },
    "type": [
      "Bug",
      "Poison"
    ],
    "base": {
      "HP": 65,
      "Attack": 90,
      "Defence": 40,
      "SpAttack": 45,
      "SpDefence": 80,
      "Speed": 75
    }
  },
  {
    "id": 16,
    "name": {
      "english": "Pidgey",
      "japanese": "ポッポ",
      "chinese": "波波"
    },
    "type": [
      "Normal",
      "Flying"
    ],
    "base": {
      "HP": 40,
      "Attack": 45,
      "Defence": 40,
      "SpAttack": 35,
      "SpDefence": 35,
      "Speed": 56
    }
  },
  {
    "id": 17,
    "name": {
      "english": "Pidgeotto",
      "japanese": "ピジョン",
      "chinese": "比比鸟"
    },
    "type": [
      "Normal",
      "Flying"
    ],
    "base": {
      "HP": 63,
      "Attack": 60,
      "Defence": 55,
      "SpAttack": 50,
      "SpDefence": 50,
      "Speed": 71
    }
  },
  {
    "id": 18,
    "name": {
      "english": "Pidgeot",
      "japanese": "ピジョット",
      "chinese": "大比鸟"
    },
    "type": [
      "Normal",
      "Flying"
    ],
    "base": {
      "HP": 83,
      "Attack": 80,
      "Defence": 75,
      "SpAttack": 70,
      "SpDefence": 70,
      "Speed": 101
    }
  },
  {
    "id": 19,
    "name": {
      "english": "Rattata",
      "japanese": "コラッタ",
      "chinese": "小拉达"
    },
    "type": [
      "Normal"
    ],
    "base": {
      "HP": 30,
      "Attack": 56,
      "Defence": 35,
      "SpAttack": 25,
      "SpDefence": 35,
      "Speed": 72
    }
  },
  {
    "id": 20,
    "name": {
      "english": "Raticate",
      "japanese": "ラッタ",
      "chinese": "拉达"
    },
    "type": [
      "Normal"
    ],
    "base": {
      "HP": 55,
      "Attack": 81,
      "Defence": 60,
      "SpAttack": 50,
      "SpDefence": 70,
      "Speed": 97
    }
  },
  {
    "id": 21,
    "name": {
      "english": "Spearow",
      "japanese": "オニスズメ",
      "chinese": "烈雀"
    },
    "type": [
      "Normal",
      "Flying"
    ],
    "base": {
      "HP": 40,
      "Attack": 60,
      "Defence": 30,
      "SpAttack": 31,
      "SpDefence": 31,
      "Speed": 70
    }
  },
  {
    "id": 22,
    "name": {
      "english": "Fearow",
      "japanese": "オニドリル",
      "chinese": "大嘴雀"
    },
    "type": [
      "Normal",
      "Flying"
    ],
    "base": {
      "HP": 65,
      "Attack": 90,
      "Defence": 65,
      "SpAttack": 61,
      "SpDefence": 61,
      "Speed": 100
    }
  },
  {
    "id": 23,
    "name": {
      "english": "Ekans",
      "japanese": "アーボ",
      "chinese": "阿柏蛇"
    },
    "type": [
      "Poison"
    ],
    "base": {
      "HP": 35,
      "Attack": 60,
      "Defence": 44,
      "SpAttack": 40,
      "SpDefence": 54,
      "Speed": 55
    }
  },
  {
    "id": 24,
    "name": {
      "english": "Arbok",
      "japanese": "アーボック",
      "chinese": "阿柏怪"
    },
    "type": [
      "Poison"
    ],
    "base": {
      "HP": 60,
      "Attack": 95,
      "Defence": 69,
      "SpAttack": 65,
      "SpDefence": 79,
      "Speed": 80
    }
  },
  {
    "id": 25,
    "name": {
      "english": "Pikachu",
      "japanese": "ピカチュウ",
      "chinese": "皮卡丘"
    },
    "type": [
      "Electric"
    ],
    "base": {
      "HP": 35,
      "Attack": 55,
      "Defence": 40,
      "SpAttack": 50,
      "SpDefence": 50,
      "Speed": 90
    }
  },
  {
    "id": 26,
    "name": {
      "english": "Raichu",
      "japanese": "ライチュウ",
      "chinese": "雷丘"
    },
    "type": [
      "Electric"
    ],
    "base": {
      "HP": 60,
      "Attack": 90,
      "Defence": 55,
      "SpAttack": 90,
      "SpDefence": 80,
      "Speed": 110
    }
  },
  {
    "id": 27,
    "name": {
      "english": "Sandshrew",
      "japanese": "サンド",
      "chinese": "穿山鼠"
    },
    "type": [
      "Ground"
    ],
    "base": {
      "HP": 50,
      "Attack": 75,
      "Defence": 85,
      "SpAttack": 20,
      "SpDefence": 30,
      "Speed": 40
    }
  },
  {
    "id": 28,
    "name": {
      "english": "Sandslash",
      "japanese": "サンドパン",
      "chinese": "穿山王"
    },
    "type": [
      "Ground"
    ],
    "base": {
      "HP": 75,
      "Attack": 100,
      "Defence": 110,
      "SpAttack": 45,
      "SpDefence": 55,
      "Speed": 65
    }
  },
  {
    "id": 29,
    "name": {
      "english": "Nidoran♀",
      "japanese": "ニドラン♀",
      "chinese": "尼多兰"
    },
    "type": [
      "Poison"
    ],
    "base": {
      "HP": 55,
      "Attack": 47,
      "Defence": 52,
      "SpAttack": 40,
      "SpDefence": 40,
      "Speed": 41
    }
  },
  {
    "id": 30,
    "name": {
      "english": "Nidorina",
      "japanese": "ニドリーナ",
      "chinese": "尼多娜"
    },
    "type": [
      "Poison"
    ],
    "base": {
      "HP": 70,
      "Attack": 62,
      "Defence": 67,
      "SpAttack": 55,
      "SpDefence": 55,
      "Speed": 56
    }
  },
  {
    "id": 31,
    "name": {
      "english": "Nidoqueen",
      "japanese": "ニドクイン",
      "chinese": "尼多后"
    },
    "type": [
      "Poison",
      "Ground"
    ],
    "base": {
      "HP": 90,
      "Attack": 92,
      "Defence": 87,
      "SpAttack": 75,
      "SpDefence": 85,
      "Speed": 76
    }
  },
  {
    "id": 32,
    "name": {
      "english": "Nidoran♂",
      "japanese": "ニドラン♂",
      "chinese": "尼多朗"
    },
    "type": [
      "Poison"
    ],
    "base": {
      "HP": 46,
      "Attack": 57,
      "Defence": 40,
      "SpAttack": 40,
      "SpDefence": 40,
      "Speed": 50
    }
  },
  {
    "id": 33,
    "name": {
      "english": "Nidorino",
      "japanese": "ニドリーノ",
      "chinese": "尼多力诺"
    },
    "type": [
      "Poison"
    ],
    "base": {
      "HP": 61,
      "Attack": 72,
      "Defence": 57,
      "SpAttack": 55,
      "SpDefence": 55,
      "Speed": 65
    }
  },
  {
    "id": 34,
    "name": {
      "english": "Nidoking",
      "japanese": "ニドキング",
      "chinese": "尼多王"
    },
    "type": [
      "Poison",
      "Ground"
    ],
    "base": {
      "HP": 81,
      "Attack": 102,
      "Defence": 77,
      "SpAttack": 85,
      "SpDefence": 75,
      "Speed": 85
    }
  },
  {
    "id": 35,
    "name": {
      "english": "Clefairy",
      "japanese": "ピッピ",
      "chinese": "皮皮"
    },
    "type": [
      "Fairy"
    ],
    "base": {
      "HP": 70,
      "Attack": 45,
      "Defence": 48,
      "SpAttack": 60,
      "SpDefence": 65,
      "Speed": 35
    }
  },
  {
    "id": 36,
    "name": {
      "english": "Clefable",
      "japanese": "ピクシー",
      "chinese": "皮可西"
    },
    "type": [
      "Fairy"
    ],
    "base": {
      "HP": 95,
      "Attack": 70,
      "Defence": 73,
      "SpAttack": 95,
      "SpDefence": 90,
      "Speed": 60
    }
  },
  {
    "id": 37,
    "name": {
      "english": "Vulpix",
      "japanese": "ロコン",
      "chinese": "六尾"
    },
    "type": [
      "Fire"
    ],
    "base": {
      "HP": 38,
      "Attack": 41,
      "Defence": 40,
      "SpAttack": 50,
      "SpDefence": 65,
      "Speed": 65
    }
  },
  {
    "id": 38,
    "name": {
      "english": "Ninetales",
      "japanese": "キュウコン",
      "chinese": "九尾"
    },
    "type": [
      "Fire"
    ],
    "base": {
      "HP": 73,
      "Attack": 76,
      "Defence": 75,
      "SpAttack": 81,
      "SpDefence": 100,
      "Speed": 100
    }
  },
  {
    "id": 39,
    "name": {
      "english": "Jigglypuff",
      "japanese": "プリン",
      "chinese": "胖丁"
    },
    "type": [
      "Normal",
      "Fairy"
    ],
    "base": {
      "HP": 115,
      "Attack": 45,
      "Defence": 20,
      "SpAttack": 45,
      "SpDefence": 25,
      "Speed": 20
    }
  },
  {
    "id": 40,
    "name": {
      "english": "Wigglytuff",
      "japanese": "プクリン",
      "chinese": "胖可丁"
    },
    "type": [
      "Normal",
      "Fairy"
    ],
    "base": {
      "HP": 140,
      "Attack": 70,
      "Defence": 45,
      "SpAttack": 85,
      "SpDefence": 50,
      "Speed": 45
    }
  },
  {
    "id": 41,
    "name": {
      "english": "Zubat",
      "japanese": "ズバット",
      "chinese": "超音蝠"
    },
    "type": [
      "Poison",
      "Flying"
    ],
    "base": {
      "HP": 40,
      "Attack": 45,
      "Defence": 35,
      "SpAttack": 30,
      "SpDefence": 40,
      "Speed": 55
    }
  },
  {
    "id": 42,
    "name": {
      "english": "Golbat",
      "japanese": "ゴルバット",
      "chinese": "大嘴蝠"
    },
    "type": [
      "Poison",
      "Flying"
    ],
    "base": {
      "HP": 75,
      "Attack": 80,
      "Defence": 70,
      "SpAttack": 65,
      "SpDefence": 75,
      "Speed": 90
    }
  },
  {
    "id": 43,
    "name": {
      "english": "Oddish",
      "japanese": "ナゾノクサ",
      "chinese": "走路草"
    },
    "type": [
      "Grass",
      "Poison"
    ],
    "base": {
      "HP": 45,
      "Attack": 50,
      "Defence": 55,
      "SpAttack": 75,
      "SpDefence": 65,
      "Speed": 30
    }
  },
  {
    "id": 44,
    "name": {
      "english": "Gloom",
      "japanese": "クサイハナ",
      "chinese": "臭臭花"
    },
    "type": [
      "Grass",
      "Poison"
    ],
    "base": {
      "HP": 60,
      "Attack": 65,
      "Defence": 70,
      "SpAttack": 85,
      "SpDefence": 75,
      "Speed": 40
    }
  },
  {
    "id": 45,
    "name": {
      "english": "Vileplume",
      "japanese": "ラフレシア",
      "chinese": "霸王花"
    },
    "type": [
      "Grass",
      "Poison"
    ],
    "base": {
      "HP": 75,
      "Attack": 80,
      "Defence": 85,
      "SpAttack": 110,
      "SpDefence": 90,
      "Speed": 50
    }
  },
  {
    "id": 46,
    "name": {
      "english": "Paras",
      "japanese": "パラス",
      "chinese": "派拉斯"
    },
    "type": [
      "Bug",
      "Grass"
    ],
    "base": {
      "HP": 35,
      "Attack": 70,
      "Defence": 55,
      "SpAttack": 45,
      "SpDefence": 55,
      "Speed": 25
    }
  },
  {
    "id": 47,
    "name": {
      "english": "Parasect",
      "japanese": "パラセクト",
      "chinese": "派拉斯特"
    },
    "type": [
      "Bug",
      "Grass"
    ],
    "base": {
      "HP": 60,
      "Attack": 95,
      "Defence": 80,
      "SpAttack": 60,
      "SpDefence": 80,
      "Speed": 30
    }
  },
  {
    "id": 48,
    "name": {
      "english": "Venonat",
      "japanese": "コンパン",
      "chinese": "毛球"
    },
    "type": [
      "Bug",
      "Poison"
    ],
    "base": {
      "HP": 60,
      "Attack": 55,
      "Defence": 50,
      "SpAttack": 40,
      "SpDefence": 55,
      "Speed": 45
    }
  },
  {
    "id": 49,
    "name": {
      "english": "Venomoth",
      "japanese": "モルフォン",
      "chinese": "摩鲁蛾"
    },
    "type": [
      "Bug",
      "Poison"
    ],
    "base": {
      "HP": 70,
      "Attack": 65,
      "Defence": 60,
      "SpAttack": 90,
      "SpDefence": 75,
      "Speed": 90
    }
  },
  {
    "id": 50,
    "name": {
      "english": "Diglett",
      "japanese": "ディグダ",
      "chinese": "地鼠"
    },
    "type": [
      "Ground"
    ],
    "base": {
      "HP": 10,
      "Attack": 55,
      "Defence": 25,
      "SpAttack": 35,
      "SpDefence": 45,
      "Speed": 95
    }
  },
  {
    "id": 51,
    "name": {
      "english": "Dugtrio",
      "japanese": "ダグトリオ",
      "chinese": "三地鼠"
    },
    "type": [
      "Ground"
    ],
    "base": {
      "HP": 35,
      "Attack": 100,
      "Defence": 50,
      "SpAttack": 50,
      "SpDefence": 70,
      "Speed": 120
    }
  }
]

export default POKEMON;
