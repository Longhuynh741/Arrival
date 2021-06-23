import Button from 'react-bootstrap/Button';
import ToggleButton from 'react-bootstrap/ToggleButton'
function CheckIn() {
    return (
        <div class="card text-center">\
            <div class="card-header">
                <h1>Event Title And Questions</h1>
            </div>
            <div class="card-body">
                <h5 class="card-title">Qustion 1</h5>
               <ToggleButton type = "radio">Yes</ToggleButton>
               <ToggleButton type = "radio">No</ToggleButton>
                <h5 class="card-title">Qustion 2</h5>
                <ToggleButton type = "radio">Yes</ToggleButton>
               <ToggleButton type = "radio">No</ToggleButton>
                <h5 class="card-title">Qustion 3</h5>
                <ToggleButton type = "radio">Yes</ToggleButton>
               <ToggleButton type = "radio">No</ToggleButton>
                <h5 class="card-title">Qustion 4</h5>
                <ToggleButton type = "radio">Yes</ToggleButton>
               <ToggleButton type = "radio">No</ToggleButton>
                <h5 class="card-title">Qustion 5</h5>
                <ToggleButton type = "radio">Yes</ToggleButton>
               <ToggleButton type = "radio">No</ToggleButton>
                <h5 class="card-title">Qustion 6</h5>
                <ToggleButton type = "radio">Yes</ToggleButton>
               <ToggleButton type = "radio">No</ToggleButton>
                <h5 class="card-title">Qustion 7</h5>
                <ToggleButton type = "radio">Yes</ToggleButton>
               <ToggleButton type = "radio">No</ToggleButton>
                <h5 class="card-title">Qustion 8</h5>
                <ToggleButton type = "radio">Yes</ToggleButton>
               <ToggleButton type = "radio">No</ToggleButton>
                <h5 class="card-title">Qustion 9</h5>
                <ToggleButton type = "radio">Yes</ToggleButton>
               <ToggleButton type = "radio">No</ToggleButton>
                <h5 class="card-title">Qustion 10</h5>
                <ToggleButton type = "radio">Yes</ToggleButton>
               <ToggleButton type = "radio">No</ToggleButton>
            </div>
            <div class="card-footer text-muted">
                <Button class="btn btn-primary mr-1">Check in</Button>
                <Button class="btn btn-primary">Submit Answer</Button>
            </div>
        </div>
    )
}
export default CheckIn;