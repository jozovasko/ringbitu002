input.onButtonPressed(Button.A, function () {
    basic.showString("A")
    while (true) {
        vzdialenost = RingbitCar.ringbitcar_sonarbit(RingbitCar.Distance_Unit.Distance_Unit_cm)
        if (vzdialenost < 15) {
            RingbitCar.running_distance(RingbitCar.Direction_run.backward, 5)
        } else if (vzdialenost > 15) {
            RingbitCar.running_distance(RingbitCar.Direction_run.forward, 5)
        } else {
            RingbitCar.brake()
        }
    }
})
input.onButtonPressed(Button.B, function () {
    basic.showString("B")
    RingbitCar.brake()
})
let vzdialenost = 0
basic.showString("U")
basic.forever(function () {
	
})
