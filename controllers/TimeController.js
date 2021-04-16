const { Time, Cidade } = require ('../models/');
const { Op } = require("sequelize");

class TimeController {
    /* DEFINIR MÉTODOS */

    async create(req,res) {
        try {
            let dataFundacao = req.body.dataFundacao; // 02/01/1921
            let datas = dataFundacao.split('/'); // ['02','01','1921'];
            dataFundacao = datas[1] + '/' + datas[0] + '/' + datas[2];
            let time = {
                nome: req.body.nome,
                dataFundacao: new Date(dataFundacao),
                serie: req.body.serie,
                qtdTitulos: Number(req.body.qtdTitulos),
            }
            const timeResult = await Time.create(time);
            return res.status(200).json(timeResult); 
        } catch (err) {
            return res.status(400).json({error: err.message});
        }
    }

    async getAll(req,res) {
        try { 
            const times = await Time.findAll();
            return res.status(200).json(times);
        }
        catch (err) {
            return res.status(400).json({error: err.message});
        }
    }

    async getOne(req,res) {
        try {
            const time = await Time.findByPk(req.params.id)
            return res.status(200).json(time);
        }
        catch (err) {
            return res.status(400).json({error: err.message});
        }
    }

    async update(req,res) {
    }

    async delete(req,res) {

    }

    async search(req,res) {

    }

    async searchByName(req, res) {

    }
}
module.exports = new TimeController();