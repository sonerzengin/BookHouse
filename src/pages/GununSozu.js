import { Text } from '@chakra-ui/react'
import React from 'react'
import {Grid,GridItem} from '@chakra-ui/react'

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
        { text:'Not till we are completely lost or turned around…do we begin to find ourselves',
         author:"Henry David Thoreau"
        },
        { text:'Hiçbir şey değişmedi, ama yine de her şey başka bir biçimde var olup gidiyor. Anlatamıyorum. Bulantıya benziyor bu, ama aynı zamanda onun tam tersi.',
         author:"Jean-Paul Sartre"
        },
        { text:'Rather than love, than money, than fame, give me truth.',
         author:"Henry David Thoreau"
        },
        { text:'Hayat kısa diye düşünüyorum. Ve zaman kaybediyoruz. Hayat kısa. Hepsi bu. Bu üzerinde düşünülmesi gereken bir şey.',
         author:"John Verdon"
        },
       
             
       ]
    let gununsozu = sozler[(Math.random() * sozler.length) | 0]
    
  return (
    <div className='gununsozu'>
        <Grid justifyContent={'center'} alignItems={'center'} spacingY='20px' templateColumns='repeat(3, 1fr)' gap={4} mt={200}>
            <GridItem w='100%' h='10'  />
            <GridItem textAlign={'center'}  w='100%' h='100' bg='green.100'>
                <Text>{gununsozu.text}</Text>
                <Text><b>{gununsozu.author}</b></Text>
            </GridItem>
            <GridItem w='100%' h='10'  />
            
        </Grid>
      
    </div>
  )
}

export default GununSozu
