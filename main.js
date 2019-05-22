    
    Vue.component('coupon', {
        template: `<input placeholder = "Input" @blur="onCouponApplied">
        `,
        methods: {
            onCouponApplied() {
                this.$emit('applied')
            }
        }
    });

    // //Slot in vue sample
    Vue.component('modal', {
        
        template: `
        <el-button @click="visible = true">Button</el-button>
        <el-dialog :visible.sync="visible" title="Hello world">
          <p>Try Element</p>
        </el-dialog>
        `
    });

    new Vue({
        el: '#root',
        data:{
            couponApplied: false,
            visible: false
        },
        methods: {
            onCouponApplied() {
               this.couponApplied = true;
            }
        }
        
    });



