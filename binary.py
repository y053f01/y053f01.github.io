#
#
# I will build something big
# (C) @wlanpsk 2019 | https://xss.wlanpsk.me
#

# Test code

# Binaries for Characters based on ASCII
# Upper Case 
binaryForUpperCase = {
	'A':'01000001',
	'B':'01000010',
	'C':'01000011',
	'D':'01000100',
	'E':'01000101',
	'F':'01000110',
	'G':'01000111',
	'H':'01001000',
	'I':'01001001',
	'J':'01001010',
	'K':'01001011',
	'L':'01001100',
	'M':'01001101',
	'N':'01001110',
	'O':'01001111',
	'P':'01010000',
	'Q':'01010001',
	'R':'01010010',
	'S':'01010011',
	'T':'01010100',
	'U':'01010101',
	'V':'01010110',
	'W':'01010111',
	'X':'01011000',
	'Y':'01011001',
	'Z':'01011010',
}
# Lower Case
binaryForLowerCase = {
	'a':'01100001',
	'b':'01100010',
	'c':'01100011',
	'd':'01100100',
	'e':'01100101',
	'f':'01100110',
	'g':'01100111',
	'h':'01101000',
	'i':'01101001',
	'j':'01101010',
	'k':'01101011',
	'l':'01101100',
	'm':'01101101',
	'n':'01101110',
	'o':'01101111',
	'p':'01110000',
	'q':'01110001',
	'r':'01110010',
	's':'01110011',
	't':'01110100',
	'u':'01110101',
	'v':'01110110',
	'w':'01110111',
	'x':'01111000',
	'y':'01111001',
	'z':'01111010',
}

# Upper Letter Number 
numberForLettersUpperCase = {
	'1':'A',
	'2':'B',
	'3':'C',
	'4':'D',
	'5':'E',
	'6':'F',
	'7':'G',
	'8':'H',
	'9':'I',
	'10':'J',
	'11':'K',
	'12':'L',
	'13':'M',
	'14':'N',
	'15':'O',
	'16':'P',
	'17':'Q',
	'18':'R',
	'19':'S',
	'20':'T',
	'21':'U',
	'22':'V',
	'23':'W',
	'24':'X',
	'25':'Y',
	'26':'Z',
}

# Lower Letter Number 
numberForLettersLowerCase = {
	'1':'a',
	'2':'b',
	'3':'c',
	'4':'d',
	'5':'e',
	'6':'f',
	'7':'g',
	'8':'h',
	'9':'i',
	'10':'j',
	'11':'k',
	'12':'l',
	'13':'m',
	'14':'n',
	'15':'o',
	'16':'p',
	'17':'q',
	'18':'r',
	'19':'s',
	'20':'t',
	'21':'u',
	'22':'v',
	'23':'w',
	'24':'x',
	'25':'y',
	'26':'z',
}

def output():
	
	print("Enter your name to reverse it to binary format:")
	
	name = input()
	
	mainValue = 0

	lenName = len(name)

	while mainValue < lenName:

	#==============  loob for lower case letters ==============#
  		
		if name[mainValue] == numberForLettersUpperCase['1']:
			print(binaryForUpperCase['A'],end=",")

		elif name[mainValue] == numberForLettersUpperCase['2']:
			print(binaryForUpperCase['B'],end=",")

		elif name[mainValue] == numberForLettersUpperCase['3']:
			print(binaryForUpperCase['C'],end=",")

		elif name[mainValue] == numberForLettersUpperCase['4']:
			print(binaryForUpperCase['D'],end=",")

		elif name[mainValue] == numberForLettersUpperCase['5']:
			print(binaryForUpperCase['E'],end=",")

		elif name[mainValue] == numberForLettersUpperCase['6']:
			print(binaryForUpperCase['F'],end=",")

		elif name[mainValue] == numberForLettersUpperCase['7']:
			print(binaryForUpperCase['G'],end=",")

		elif name[mainValue] == numberForLettersUpperCase['8']:
			print(binaryForUpperCase['H'],end=",")

		elif name[mainValue] == numberForLettersUpperCase['9']:
			print(binaryForUpperCase['I'],end=",")

		elif name[mainValue] == numberForLettersUpperCase['10']:
			print(binaryForUpperCase['J'],end=",")

		elif name[mainValue] == numberForLettersUpperCase['11']:
			print(binaryForUpperCase['K'],end=",")

		elif name[mainValue] == numberForLettersUpperCase['12']:
			print(binaryForUpperCase['L'],end=",")

		elif name[mainValue] == numberForLettersUpperCase['13']:
			print(binaryForUpperCase['M'],end=",")

		elif name[mainValue] == numberForLettersUpperCase['14']:
			print(binaryForUpperCase['N'],end=",")

		elif name[mainValue] == numberForLettersUpperCase['15']:
			print(binaryForUpperCase['O'],end=",")

		elif name[mainValue] == numberForLettersUpperCase['16']:
			print(binaryForUpperCase['P'],end=",")

		elif name[mainValue] == numberForLettersUpperCase['17']:
			print(binaryForUpperCase['Q'],end=",")

		elif name[mainValue] == numberForLettersUpperCase['18']:
			print(binaryForUpperCase['R'],end=",")

		elif name[mainValue] == numberForLettersUpperCase['19']:
			print(binaryForUpperCase['S'],end=",")

		elif name[mainValue] == numberForLettersUpperCase['20']:
			print(binaryForUpperCase['T'],end=",")

		elif name[mainValue] == numberForLettersUpperCase['21']:
			print(binaryForUpperCase['U'],end=",")

		elif name[mainValue] == numberForLettersUpperCase['22']:
			print(binaryForUpperCase['V'],end=",")

		elif name[mainValue] == numberForLettersUpperCase['23']:
			print(binaryForUpperCase['W'],end=",")

		elif name[mainValue] == numberForLettersUpperCase['24']:
			print(binaryForUpperCase['X'],end=",")

		elif name[mainValue] == numberForLettersUpperCase['25']:
			print(binaryForUpperCase['Y'],end=",")

		elif name[mainValue] == numberForLettersUpperCase['26']:
			print(binaryForUpperCase['Z'],end=",")

	#==============  loob for lower case letters ==============#

		elif name[mainValue] == numberForLettersLowerCase['1']:
			print(binaryForLowerCase['a'],end=",")

		elif name[mainValue] == numberForLettersLowerCase['2']:
			print(binaryForLowerCase['b'],end=",")

		elif name[mainValue] == numberForLettersLowerCase['3']:
			print(binaryForLowerCase['c'],end=",")

		elif name[mainValue] == numberForLettersLowerCase['4']:
			print(binaryForLowerCase['d'],end=",")

		elif name[mainValue] == numberForLettersLowerCase['5']:
			print(binaryForLowerCase['e'],end=",")

		elif name[mainValue] == numberForLettersLowerCase['6']:
			print(binaryForLowerCase['f'],end=",")

		elif name[mainValue] == numberForLettersLowerCase['7']:
			print(binaryForLowerCase['g'],end=",")

		elif name[mainValue] == numberForLettersLowerCase['8']:
			print(binaryForLowerCase['h'],end=",")

		elif name[mainValue] == numberForLettersLowerCase['9']:
			print(binaryForLowerCase['i'],end=",")

		elif name[mainValue] == numberForLettersLowerCase['10']:
			print(binaryForLowerCase['j'],end=",")

		elif name[mainValue] == numberForLettersLowerCase['11']:
			print(binaryForLowerCase['k'],end=",")

		elif name[mainValue] == numberForLettersLowerCase['12']:
			print(binaryForLowerCase['l'],end=",")

		elif name[mainValue] == numberForLettersLowerCase['13']:
			print(binaryForLowerCase['m'],end=",")

		elif name[mainValue] == numberForLettersLowerCase['14']:
			print(binaryForLowerCase['n'],end=",")

		elif name[mainValue] == numberForLettersLowerCase['15']:
			print(binaryForLowerCase['o'],end=",")

		elif name[mainValue] == numberForLettersLowerCase['16']:
			print(binaryForLowerCase['p'],end=",")

		elif name[mainValue] == numberForLettersLowerCase['17']:
			print(binaryForLowerCase['q'],end=",")

		elif name[mainValue] == numberForLettersLowerCase['18']:
			print(binaryForLowerCase['r'],end=",")

		elif name[mainValue] == numberForLettersLowerCase['19']:
			print(binaryForLowerCase['s'],end=",")

		elif name[mainValue] == numberForLettersLowerCase['20']:
			print(binaryForLowerCase['t'],end=",")

		elif name[mainValue] == numberForLettersLowerCase['21']:
			print(binaryForLowerCase['u'],end=",")

		elif name[mainValue] == numberForLettersLowerCase['22']:
			print(binaryForLowerCase['v'],end=",")

		elif name[mainValue] == numberForLettersLowerCase['23']:
			print(binaryForLowerCase['w'],end=",")

		elif name[mainValue] == numberForLettersLowerCase['24']:
			print(binaryForLowerCase['x'],end=",")

		elif name[mainValue] == numberForLettersLowerCase['25']:
			print(binaryForLowerCase['y'],end=",")

		elif name[mainValue] == numberForLettersLowerCase['26']:
			print(binaryForLowerCase['z'],end=",")

		else:
			print("\nYou have been entered undefined characters.")
			break
			
		mainValue = mainValue + 1
		
output()