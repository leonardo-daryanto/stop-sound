//% weight=100 icon=M color=#AF7AC5

namespace melody {
    /**
     *  stop the melody
     */
    //% block
    export function stopMelody(): void {

        forever(function() {
            
            music.rest(BeatFraction.Whole)
        })
    }
}
