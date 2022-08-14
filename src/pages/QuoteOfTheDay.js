import Card from 'react-bootstrap/Card';
import Header from '../components/Header';
import Footer from  '../components/Footer';
function GununSozu() {
    
    const sozler = [
        
        { text:'Mavi yolculuk bitmemişti, mavi yolculuk bitmeyecekti. On yedi mavi yolcu on yedi mavi dost olmuştu.',
         author:"Azra Erhat"
        },
        { text:'Yalnızdım,kendi dünyama hapsolmuştum,diğerleriyle iletişim kuramıyordum;varlığımı onların varlığından ayıran,beni onların hayatı ve faaliyetleri dışında tutan camdan bir duvar vardı sanki.',
         author:"Christy Brown"
        },
        { text:'Ağacı görüp ormanı göz ardı etmek nasıl yanlışsa, ormana bakıp ağacı gözden kaçırmak da yanlıştır.',
         author:"Aziz Nesin"
        },
        { text:'İnsanın yaşlandıkça daha akıllı olup olmadığından pek emin değilim, Starling. Ama bazı şeylerden sakınmayı öğreniyorsun, burası kesin. Ve burada da bunu yapabiliriz.',
         author:"Thomas Harris"
        },
        { text:'İnsanın konuşacak kadar zekaya ya da susacak kadar akla sahip olmaması büyük bir talihsizliktir',
         author:"Henry David Thoreau"
        },
        { text:'Hiçbir şey değişmedi, ama yine de her şey başka bir biçimde var olup gidiyor. Anlatamıyorum. Bulantıya benziyor bu, ama aynı zamanda onun tam tersi.',
         author:"Jean-Paul Sartre"
        },
        { text:'Hiçbir yararı olmayacağını bile bile insan kalmanın çok önemli olduğunu düşünüyorsan, onları yendin demektir.',
         author:"Henry David Thoreau"
        },
        { text:'Hayat kısa diye düşünüyorum. Ve zaman kaybediyoruz. Hayat kısa. Hepsi bu. Bu üzerinde düşünülmesi gereken bir şey.',
         author:"John Verdon"
        },
       
             
       ]
    let gununsozu = sozler[(Math.random() * sozler.length) | 0]
    
  return (
<div >
    <Header />
    <div className='quoteOfTheDay'>
    <Card >
      <Card.Header>Günün Sözü</Card.Header>
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p className="blockquote__text">
            {'“ '}
            {gununsozu.text}{' ”'}
          </p>
          <footer className="blockquote-footer">
            <cite title="Source Title">{gununsozu.author}</cite>
          </footer>
        </blockquote>
      </Card.Body>
    </Card>
    </div>
    <Footer/>
</div>
  );
}

export default GununSozu;