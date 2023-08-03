const User = require('../model/users')

const controller = {
    get: (req, res)=>{
        User.find({}).then((users)=>{
            if(!users.length) return res.status(404).json({ err: 'user not found' });
            res.json(users);
        })
        .catch(err => res.status(500).json(err))
    },
    getSeq: (req, res)=>{
        const userSeq = req.params.userSeq;
        User.findOne({ seq: userSeq }).then((user)=>{
            if(!user) return res.status(404).json({ err: 'user not found' });
            res.json(user);
        })
        .catch(err => res.status(500).json(err));
    },
    post: (req, res)=>{
        console.log(req.body);
        const new_user = new User(req.body);
        new_user.save().then((result)=>{
            console.log(result);
            res.json(result);
        })
        .catch(err => res.status(500).json(err));
    },
    deleteSeq: (req, res)=>{
        const userSeq = req.params.userSeq;
        User.deleteOne({ seq: userSeq }).then((result)=>{
            if(!result.deletedCount) return res.status(404).json({ err: 'user not found'});
            console.log(result)
            res.json(result)
        })
        .catch(err => res.status(500).json(err));
    },
    updateSeq: (req,res)=>{
        const userSeq = req.params.userSeq;
        const update = req.body;
        User.updateOne({ seq: userSeq }, update).then((result)=>{
            if(!result.matchedCount) return res.status(404).json({ err: 'user not found'});
            console.log(result)
            res.json(result)
        })
        .catch(err => res.status(500).json(err));
    }
}

module.exports = controller