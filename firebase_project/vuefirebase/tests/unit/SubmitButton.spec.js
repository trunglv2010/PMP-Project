import {shallowMount} from '@vue/test-utils'
import SubmitButton from '@/components/SubmitButton.vue'

describe('SubmitButton.vue', () => {
    it("display a non authorization message", () => {
        const msg = "submit";
        const wrapper = shallowMount(SubmitButton, {
            propsData: {
                msg:msg
            }
        })

        console.log(wrapper.html());

        expect(wrapper.find("span").text()).toBe("Not Authorized");
        expect(wrapper.find("button").text()).toBe("submit");
    })

})

describe('SubmitButton.vue', () => {
    it ("display authorization message", () => {
        const msg = "submit";
        const isAdmin = true;
        const wrapper = shallowMount(SubmitButton, {
            propsData: {
                msg: msg,
                isAdmin: isAdmin
            }
        })

        console.log(wrapper.html());
        expect(wrapper.find("span").text()).toBe("Admin Privileges");
        expect(wrapper.find("button").text()).toBe("submit");
    })
})