
/*
 * GET home page.
 */
var tempList = new Array();

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};

exports.upload_temp = function(req, res){
    var temp = req.query.temp;
    tempList.push(temp);
    res.status(200);
    res.end("uploaded");
};

exports.temp = function(req, res){
    res.status(200);
    res.write('<temps>');
    for(i=0;i< tempList.length;i++){
        console.log("temp "+tempList[i]);
        res.write('<atemp>'+tempList[i]);
        res.write('</atemp>');
    }
    res.write('</temps>');
    res.end("");
};