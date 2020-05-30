//requerir express para definir url
const {Router}  = require('express');
const router = Router();

router.get('/', (req, res) =>{
    res.render('index', { title: 'LUNÂRIS | Sitio Oficial'});
});

router.get('/bio', (req, res) =>{
    res.render('bio', { title: 'LUNÂRIS | Bio'});
});

router.get('/gallery', (req, res) =>{
    res.render('gallery', { title: 'LUNÂRIS | Gallery'});
});

router.get('/video', (req, res) =>{
    res.render('video', { title: 'LUNÂRIS | Video'});
})

module.exports = router;