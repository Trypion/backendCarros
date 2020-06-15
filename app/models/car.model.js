module.exports = mongoose => {
    let schema = mongoose.Schema({
        modelo: String,
        ano: Number,
        preco: Number,
        cor: String,
        descricao: String,
        imagem: String,
        vendido: Boolean,
        author: {
            id: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "User"
            },
            username: String
        },
        comments: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Comment"
        }]
    }, {
        timestamps: true
    });

    schema.method("toJSON", function () {
        const {
            __v,
            _id,
            ...object
        } = this.toObject();
        object.id = _id;
        return object;
    });

    const Carro = mongoose.model("carro", schema);

    return Carro;
};