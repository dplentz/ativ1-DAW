async function add(req,res)
{   
    var oper = req.body.operacao;
    var result;
    var n1, n2;
    n1 = parseInt(req.body.nUm);
    n2 = parseInt(req.body.nDois);

    switch(oper)
    {
        case 'soma':
            result = n1 + n2;
            break;
        case 'subtracao':
            result = n1 - n2;
            break;
        case 'multiplicacao':
            result = n1 * n2;
            break;
        case 'divisao':
            result = n1 / n2;
            break;
    }
    msg = result;
    res.render("listar.ejs",req.body);
}
async function abreAdd(req,res)
{
    res.render("add.ejs", {});
}
async function listar(req,res)
{
    
   // res.render("usuario/listar.ejs", {});
}
async function listarFiltro(req,res)
{

}
async function abreEdt(req,res)
{

}
async function edt(req,res)
{

}
async function del(req,res)
{

}

module.exports = {add,abreAdd,listar,listarFiltro,abreEdt,edt,del}