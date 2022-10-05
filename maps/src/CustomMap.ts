export interface Mappable {
    location: {
        lat: number,
        lng: number
    }
    markerContent(): string
}

export class CustomMap {
    private googleMap: google.maps.Map

    constructor(id: string){
        this.googleMap = new google.maps.Map(document.getElementById(id) as HTMLElement, {
            zoom: 1,
            center: {
                lat: 0,
                lng: 0
            }
        })
    }

    addMarker(input: Mappable){
        const marker = new google.maps.Marker({
            map: this.googleMap,
            position: {
                lat: input.location.lat,
                lng: input.location.lng
            }
        })

        marker.addListener('click', () => {
            const infoWindow = new google.maps.InfoWindow({
                content: input.markerContent(),              
            })
            infoWindow.open(this.googleMap, marker)

        })
    }
}