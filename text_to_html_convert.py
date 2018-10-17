f = open("오픈소스 팀플.txt","r" ,encoding='UTF8')
f = f.read().replace("    ","&nbsp;&nbsp;&nbsp;&nbsp;").replace("<","&lt;").replace(">","&gt;").replace("\n","<br/>\n")
file = open("result.txt","a",encoding='UTF8')

file.write(f)
file.close()
