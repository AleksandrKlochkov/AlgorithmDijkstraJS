const graf = 
    {   
        colvoVertex:6,
        body:[
            {
                vertex1:1,
                vertex2:2,
                distance:7,
            },

            {
                vertex1:1,
                vertex2:3,
                distance:9,
            },

            {
                vertex1:1,
                vertex2:6,
                distance:14,
            },

            {
                vertex1:2,
                vertex2:3,
                distance:10,
            },

            {
                vertex1:2,
                vertex2:4,
                distance:15,
            },

            {
                vertex1:3,
                vertex2:4,
                distance:11,
            },

            {
                vertex1:3,
                vertex2:6,
                distance:2,
            },

            {
                vertex1:4,
                vertex2:5,
                distance:6,
            },

            {
                vertex1:5,
                vertex2:6,
                distance:9,
            }
           
        ]
    }

    var pointer = graf.body
    var arr = pointer.length
    var colV = graf.colvoVertex
    //массив контенер
        var v=[]
            for (var xi=0; xi<arr; xi++){
                v.push([0]);
                v[xi] = [];
                    for (var yj=0; yj<arr; yj++){
                        v[xi].push(0);
                }
        }
    //визиты
    var visite = []
    //дистанции
    var dist = []
    //установка начальных значений визитов и дистанцей
    for(var i = 0; i< arr ;i++){
        var a = pointer[i].vertex1  //вершина 1
        var b = pointer[i].vertex2  //вершина 2
        var d = pointer[i].distance //дистанция между вершинами
        v[a][b] = v[b][a]  = d
        visite[i] = false //для каждой вершины визит устанавливаем false
        dist[i] = Infinity //изначально дистанции равны бесконечности
    }

    //очередь прохождения по вершинам
    var VertexName = []
    var vStart = 1//начальная вешина
    var vEnd = 3 //конечная вешина
   
    var queue = []
    queue.push(vStart)

    dist[vStart] = 0 //дистанция первой вершины равна 0
    visite[vStart] = true //визит первой вершины true так как мы изначально находимся в ней

    var allVerticesRes = [] //вывод результата кратчайшего пути от стартовой вершины до всех имеющихся вершин
    var shortestArowing = []
    while(queue.length != 0){
        var vertex = queue.shift()
    //    console.log(vertex)
        for(var j=1; j<v[vertex].length; j++){

            if(!visite[j] && v[vertex][j] && v[vertex][j]+dist[vertex]<dist[j]){//если вершина еще не посищена и имеется ребро от этой вершины и растоение до вершины меньше чем бесконечность
                dist[j] = v[vertex][j] + dist[vertex];//записываем дистанцию
                visite[j] = true //посещаемый массив
                // console.log('vertexPrev ',vertex) 
                // console.log('vertexNext ',j)
                //console.log(dist[j])

                VertexName[j-1] =j // имя вершины в которую зашли
                queue.push(j)
              

                
            }
        }
     }

     for(var r = 1; r <= graf.colvoVertex; r++){
        allVerticesRes[r-1] = 'до: '+VertexName[r-1]+' : '+ dist[r]
     }
     allVerticesRes.splice(vStart-1, 1) //удалить из масива путь стартовой вершины

    
     console.log('Расчет кратчайшего пути от вершины: '+vStart+ ' до всех имеющихся:',allVerticesRes)
    //  console.log('Matrix',v)
    //  console.log('Distance', dist)

     queueEnd = []
     queueEnd.push(vEnd)
     end = vEnd
     var weight = dist[vEnd]
     var ver = []; // массив посещенных вершин
     ver[0] = end; // начальный элемент - конечная вершина
     var k = 1; // индекс предыдущей вершины

     while(queueEnd.length != 0){


        var vert = queueEnd.shift()
       // console.log(vert)

        for(var i1=1; i1<arr; i1++) // просматриваем все вершины
            if (v[end][i1] != 0)// если связь есть
                {
                    // console.log(i1)
                    // console.log(v[end][i1])
                    //console.log(v[end][i1])
                    var temp = weight - v[end][i1]; // определяем вес пути из предыдущей вершины
                    // console.log('temp до', temp)
                    // console.log('weight do', weight)
                    // console.log('dist',dist[i1])
                    if (temp == dist[i1]) // если вес совпал с рассчитанным
                        {                 // значит из этой вершины и был переход
                          //  console.log(i1)
                            weight = temp; // сохраняем новый вес
                            end = i1 //заменяем вершину
                            queueEnd.push(i1);// сохраняем предыдущую вершину
                            
                            ver[k] = i1; // и записываем ее в массив
                            k++;
                        }
                }
     }
     console.log(v)
     console.log('Кратчайший путь от вершины ' + vStart +' до '+ vEnd +': ', ver.reverse())
     console.log('Общий вес пути:', dist[vEnd])







    


 
