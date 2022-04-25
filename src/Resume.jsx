import React from 'react'
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import { AddressContainer, Container, Contents, Details, LeftContainer, MainContent, NameWrapper, ProfileImageContainer, RightContainer, Wrapper } from './Style';
import jsPDF from 'jspdf';
const doc = new jsPDF();

 


const Resume = () => {

    const save = () => {
            window.print();
    }
    
    // const address = useSelector(state => state.user.address)   

    const { CollageName, Describe, Address, From ,FullName,  Persentage, PhoneNo,ProjectName,
        Skill1,Skill2, Skill3, Tach_Stake_Used,To, Social, Social1,Image
    } = JSON.parse(localStorage.getItem('formData'))
   

  return (
    <>
    <div id='content'>
    <Container >
        <Wrapper>
            <LeftContainer>
                <ProfileImageContainer>
                    <img
                    // src={Image}
                    src='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUVFBgVFRQYGBgYGBgaGBobGhgdGBgaHRgaGRoYGBkbIS0kGx0rIRobJTclKi4xNDQ0GiM6PzozPy0zNDEBCwsLEA8QHxISHzMrIyo+NTw1OTM+PDU2MzM1NT4zMT4xMzEzMzwzMzEzPjMzMTUxNzkzMTMzMTMxMzwzMTUzNf/AABEIAN0A5AMBIgACEQEDEQH/xAAcAAEBAAIDAQEAAAAAAAAAAAAAAQIHAwUGBAj/xABAEAABAwIDBQYFAgQFAgcAAAABAAIREiEDMUEEIjJhcQVCUYGRoQYHE9HwYsFScoKSFCMzsfGi4RUkJVNjssL/xAAaAQEAAwEBAQAAAAAAAAAAAAAAAgMEAQUG/8QAKBEBAQACAgEDAgYDAAAAAAAAAAECEQMxIQQSQQUyIkJRYXGhEyPB/9oADAMBAAIRAxEAPwDb7nVWHVGupEHNHNDbjNGtBEnNBGim59kLZNWmfOyMNXF9kJINIy/JugO3stPFWq1OuXJR27w/dWBFWv5ogjd3PXwQNg1aZ87o3e4tMtFATNOn5F0FcKrj3Vc6RSM/so808P3Vc0ASM0BppsetlGtpuVWgOuc1GEus7JALajUMlXGqw63Uc4gwMlhtOKzDaXuc1jRm5xAA8yg5JgU65crqNFOevgvPdi/FGFtOJj0w3DwfpgYrnUh7nVyIMUxSMzO9cA2XZ4fa+zuNJ2jBJ0AxGT6By5LKlcbPFfdTerTPmjt7LTxUq07v7dVXbvDrnquoqTIp1y5WUaac9fBUtEVa5+fRGiri+yCUwajl90c2q46XRriTByRxps3L1QVzqrBGupsc0c0C4zRrQbnNBGtpuelkLZNWn2Rpqs7L0QkgwMvyUBxqy08VarU65clHCnh+6tIirXPz6IMfoHkifUd+BEFa2m56JTVvflkaSeLLnZCSDDcvyboDnVWCoMCnXLldHADhz5XQARJ4vedLII3dz1SO9pmjb8XlNkkzHd9o6oDt7LRKpFOuXojrcPnF1SBEji951sgjTTY6oGU735dG34veyAkmDl7croDm1XHRfJ2l2nhYLKsV7WNmxccyAXENAu4gAm2QBOi4u3O1sPZMJ2M87rYgCJe42axs6n2AJNgtI/EXbmJtLjiYh3nyGtBNLMJropbyc9pnX/L/AFKOWXtm08MPddPU9q/M/EJLdmw6GTuudFbv1QQWt/lIJ5jJeN7U7c2jaDOJiOPKTAnMCTYchA5LrQqseWeWXbfjx449RkzEc0QHOAmYBIE5Xjoo15FwSDyJBUSFBN2fZ3xBtGAR9PFcB4AkA83BsVH+aV63s/5mYzY+o0O8SWtLj/UwsDf7StfhiypUpyZTqoZceOXcb3+Fe3HbYx2McIYbJAYaw4uN65bG6AaYm5vaACe/cKrjRfnz4e7VxNjxm42Gd0wMRs7r2zk4ZeemYW/dm2luIxuJhmWvaHA8iJHQ8lr48/dGLl4/bf2c5dO7+WUa6mx6qkCJHF787I0A8WfO1lYqRrablC2q4RpJ4sudkcSOHL1QVzqrDqgMCnX7o4AcOfK9kAESeL35WQRu7nqlN6tM0bfi8pskmY7vtHVBl9ceBRKG8vVEGJNVstUqp3fy6ro7ufJBEb2fuggbTfPRIne846f8I39WXNDM24faNUDi5QlXd8pVf+nzhLR+r3lBBuc5SmN7zjqjf1eUqCZvw+0aIKRVfKEqq3fyyO/T7KmNM/fmg1L80+0XOxxgg7mAyojxxHiSSOTKQP5neK8LtwjEcJs0/TbPhhiifOmfMr0Hb+0DE2h+KTZ2I53QNeWEeVBXkdrcfqPBzD3g9ajKp5fMjTwTVr6HvaMjK5WYzdAuvYwnIE9F9DNkxPCPNZcvbO69Hj9PyZ/bjb/EfZ9bkp9c+C42bNiZQCdAMyuJzoMGx8NVGavRy8HJxffjY5A+8rMYguMp/wB18b33Rz7xqpe1Tvxt9TXy0hbg+VPaVew0G5w3ubnelxqBP9VY8lpWVsL5M7eBi4uE7vtqE+LDLWjnD8Q/0lXcXis/N5xbdpje9uqFtV8tFBM34fbkj57uXLxWpjUvqtkgfTbNV0d3PkjY72fNBA2m+eiUzve3RGT3sufihmbcPtzQOLlCV93ylV/6fOEtH6veUE/w/NFjv81UFppvnolNW9l/2RoI4sud1CDO7l7c7ILVVbLVJjd8p6/8o6Dw58rKiIg8XvOl0EijnKU97zhG24vKbqQZnu+0dEF4+UJVO75T0R1+HziypiIHF7zrdBJptnKU0735dG24ve6gBmTl7crINF9tbE7DfiYbhFL9oYOYOM97T0LXtPmurxNjYXufE1n6l9KwHxHKqPJel+N+zXYW04tDMR7C9+K6gEhtbWOccV4thiZgEiwnVec2PFBDcPEeMMtNILyaQ0mRWe6JLt648SIWX1GOVw8dvZ+lc3Bxeo/2ass7vxWbWAWAhZL1Wz/BWI6z8QA+DGF0XvvOjTkuHa8TsrZZw8bFY9+ThvYrpGdVAoYeVivMx48sr4m30vN9a9Nx+MfP9R5mQbZnw19F9mFSbY2AcVvjvNeOj4v0M+Sjh2Riu/yNrxdmfekua6jzLjLfJ4XbbN2L2xhuaMPHbiYbiIxC9j2UnJzvqCuIvDZV04rh1dX9/DzeX63jyzVwln8/9fEOxuy3XdtOLhfoex0+TmyF1naWBgOfTgtjDa0NaXGS6Jl5nKZ9AMlsX4q7VGxMa44OJitcKQ4FoYH+DzBpm0QDN10fZ3w1tfaLhi7aTgYIuzCa2lzuZBu0RaXb2cBuan7s8p51IycPreHjtyuG9/HjX9R4R/Z8ZEjzke69/wDKz4bwnF2M9zjiYbsJzCxzmhshzi03h0iJtkSNSvQ4fwXsuHJawFkGpjpdPg5r3EuaeQMGTabrr/le4fV21rXQQ/Ca1km2Gw4rGOBJvIieY5hX+n3bdsv1D1HDyYz/ABY6vy2LVO779Eqptnqq4iIHF787o2BxZ872W15CUU3zSmreyUaCOLLndCCTu5crILVVbLVKo3ffqq6Dw58rWQERB4vfldBIo5ylHe84RtuLym6kGZ7vtHRBfr8vdFlU3l6IgxBqseqVU7v5dVxBs3P0RpAEHNBCKbi+isTvefoowU8X3QgkyMvybIDTVnaFau75KO3uHz0VkRHe/fqgh3crylMb3n6o3d4vLVQAzJy/bSyCgVXNoXHj48McYmlrj1pBMey5Hirh+yriCKfI9NUHiz2oRtezbBhuMSX7S4NBOLOC55LjENa57mydSYsIDtX/ABLsX+H2vFwRYMe5o1NBh+H/ANBHqvY/F+zYmH9PahiNEYQDgXEPONgGDSIjiDZd+gid4A9d82tnjamYosMXBYedTXODv+ksUJbuytHNhjMccserP7nb1O19n4u29kYTMLFczEfs+EQ4EisjDaSx5F6XXB95yPgcT4L2Yu2BrnOwfqho2hjmPqDg9zcUnEe6GmprWBob3qsitifLXbfqbCxpMnCe/DPka2jyY9gXc9s9iYW1Na3FDiGmW0vewgmJu0jwVHvuNsjmplJWqsL4D2d3a2JszN/ZxhudNTpw3Bje8DeHuAvPFBBIWxfhjsc7HgfQOKcRrXuLC4XawwQwnWDVe2eQX29mdhYGzz9LDpJiSXPcTExd5PifUr7yyVRzclzmk8MJLt1HxJtuLg7LiYuAz6mI0Chu8ZJcG2a0EuN8hE+IWuTsXxG8fVlzTMhteA0x/KTYcnXW32MhcgCcV9s8yGXm9tb/AA98X7YBj7Pt+A5uLhYLsQPopqaLS4DducnN3TEZxPyfKJrv8XjPkkM2cNMzm57XCf7XL1nzCxGs2J7iBU4HDDo3gH5gHOC5rJHIeC675QbGGYGPjuH+riBjT/EzDEA/3PeP6Vs45O5FGf6NhFsb35dQCq5too0EGTl+Qq4F125eitQA+qyF9NlXOBs3NGuAEHNBCKbi+iobO9+WUaKbuy9VCCTIy/JsgrTVnaEq7vkjjVw/ZWoRGv79UD6A8Six+m78KIMnCm46XRrahJz+yjW03KFtRqGSA11Vj7IXQadMud1XmqwQGBTrl6oI7dy18VabVa58lGbueqU3q0zQG72engoHSadMudlXb2WipMinXL0QRxpsPdVzYEjP7ow02KxDYNRyQeV+I9nwcJ7dq2hrnYOG5z2gNc9jMR1MuxGMaSRLamuO6HPdMGkrVXxx8WDbsepkDCw2lmHMSZMve7wm1vBo8TH6AIJMjouHF2XDeZ+mwuzqcxpPqQju2vvlK0twMQOs5+J9RrTY0FjGtfHgaTHiIORE+/K4dp7NY7Ebi3bitFNbe82SQx47zQSYnKTBElZMfJLTZwsR+48R91l5cbLv9V2FliPxGggFwBOQJAJ6eK5IXHtOzMxGlmIxr2nNrgCD5FdM74Zw2/6b3MH8NLXAdHQH+riqpInt3sKrpNj7Aax1T8XFxCMml7msH9DTvdHEhdwSZpGep/hHj18B+wK7Md3Uct08v8Z9j7RtrsPBwoZhtJOLiuiltxutbMvfYRFgQQSJXqOyOzsPBwWYOEC1mG0NaNTqXOOriZJOpJX04eHTBGQy8Y5+JWTxVlotmOPtmmfK7oHSaTl72RzqbDrdVzpFIz+yNdTY9VJwc2m490a2q5Ua2kyVC2oyMkFa6qx62Qug06e91XOqsOqAwKdfugjhTlr4q02q1z5KMFOeqU3q0zQT655IuT6w5ogwYS6zskc4gwMlXOqsOt0Do3T+SgOFPCgbIqOf2Ua2m59kLZNWmfOyAze4tEqM06ZI7ey08VarU65ckEfu8OqpaAKtc1G7uevggbBq0z53QVoq4lGuJMHJHCq408VS6d3X7II51Nhkq5obcZo002zOdl4rt/5gbPsznYeD/wCYxRIIYYw2H9eJBE8mhxmxhdkt6ct09bte1YeFhuxcVzWMaJc5xhoA8fy6+P6jcSHsMtcGuDoMOBaIcJvlF1pvtHtfbO0cQYeJOIHGW4GG2GD9QAkyJ43ExfQkL0ewdo7Z2OGYe14TsXZTFGI0guwpH+nVwyDagkD+EkCFzm4bcdfKXHySXbYRc9n6hz+/3lcmHtAdAyJt4+kLpdl+Nuz8QSNpa2ws8Owz/wBYHsur+KvjTYmbM8YeKzGe9paxjN4EmwL3CzWjMyZtaVknFnL0t9+L2lDjkI5kQPJuZPp1XJgYYuOcycyTmT45D/YWWr/g/srtZmxYGNsu0sLXNc5uz44JbTU6gteQS0FtJDQWi+a7N/x5tOzkN7S2DEwhIH1cKHYZJtqafIPJ5LVjxSdKrlb22CHGadMkeaeFfB2R23gbWyrZ8RuIBAdEgtMTDmmHNy1C+9ppsdfBdcVzQBIzRjZuc1A2N7T7o5tVx0ugNJdY5I5xBgZKufVYI11NigPFNwgaCKjmo1tNz0shbJq097IDDVxIXGadMkJqy08VarU65ckGX0m/hRcf0DyVQVwA4c/VGgESc/zRQNpvnohZVvflkBpniy52QkzA4faNboTVbLVJjd8p6/8AKA63D5xdWBE973nooBRzlKe95wgNvxeU2UBMweH2jS6p3+UJVO75T0QHW4fa6rgAJGf5NlAabZyvGfMX4i/w2F9HCfGPjgwRnh4Zs58jJxu1vOSOFdxlt1HLdPKfH/xY/aMR+y4Dy3CZUMRzSB9ZzZ+oyRehsG2TqXEyKZ5Phb5dYmK1r9oJwcMwQwD/ADSOc2YOsnkM14nZsY4LmYjBfCc3EaOeG4PA6bsL9KYbwQCMiAR0Kvz3hJIrx/Fd18PZPY+BszKMDDawakXc7m5xu49SvuxMMOBa4Agi4IBBHgQc1mqs9u1ry+1/APZuIZOytaf/AI3Pwh/bhuaPZTY/gDs3DNTdla4243YmILZbuI5w9l6hF33VzUYtaAAAIAsANFji4TXNLXNDmkQQQCCPAg5hcqLjrXva3YeF2Xi/+I7M0tYBRjYLZpLHOaXOwxoQGkhmUgRF59vs2K3EY14cHNc0OY4GzmuAIcIzBBBXnvmUP/TcflR7vaP3XW/KjanYmwnDcf8AQxX4bSb7pDMRo6CstA8GhS7x2j86e1BJMHh/IujyRw5cr3Vqnd/LIDTbPVRSVwAu3P1RoBu7P0UDKb5oWVXyQGkniy52uoSZgcPtzuqTVbLVKo3ffqgOtw+cXVgRPe956KAUc5SjvecIJU7n6Isvr8kQRs97Lmhmd3L2Sqq2WqVU7ufPqgro7ufJBEX4vedFKab56JE73nHT/hBWfq8pUvP6faEmvlCVd3ylBX/p84QxFuL3nVTg5ylMb3nHVBW/qz0lfn74g2rExdrx8TEMu+o9saNaxxYxgGgAaPOTmSv0BFV8oX557Q2gYmPj4jYpdj4rmxlS7Ec5vsQr/T91XydPmc2xX6C+Gsf6mx7M/wDi2fBd64bSV+flvL5fY1XZ2z/pYWf2Ocz/APKn6ieIjxfL0iIiyrhERAREQeR+Z2JT2di8yweuI2PeF0HydcfobRH/ALrP/oPsuy+buJGwFv8AE9ns9hXSfJjawGbTh94Ow3x+khzZHQt9wrJ9iH5mz3RFuL35o2O9nz8FKY3vbqlNV8tFWmNnvZc1HTO7lyVrqtklVO7mgro7ufLwQRF+L35KU03z0Smd726IKz9XlKxMz+n2hWa+UJX3fKUGUM5Isfoc/ZEFdB4c+VkBEb2fvyQtpuL6IG1b35ZBG24sud0IMyOH2jWyB1VjbVJjd8vX/lAdfh84srIiO97z1UIpyvKtPe80Ebbi8puoAZk8PtGllRvZ2hA6d3y9EHX/ABDt30dlx8ZvcwsRw0l4aaR5mAvz1sTIYB+eH7LcvzSxC3YCxuWJiYbHHwAJf/uwDzWomNgQtXp8fG1PJfgK3D8qnz2cweGJj++K937rT7gtlfKLtCWY+znNjm4jf5XikjyLCf6wpc83i5x9tlIiLGvEREBERBrP507RGBgsHexRPSl5/wB2j0Xl/lCxx28kcLcB9fhBfhhrTzqg/wBJXefOh1sEaV56TS63XP0K6H5Q7Y5u3uw704uC4O5OYQ9rj5VD+pWz7EPzN2gGb8PtysjwTw5crXVDp3fyyF1NhfVVJq4g8OfJGkRvZ80LaboG1XQRsjiy53uoQZkcPtzsqHVWNtULo3fy6A6/D5xZWREd73nqoRTleUp73mglL+fqiv1z4IgNBF3ZeqOBJkZI11Vj1shdSaRl90FcZ4fsgIiDn+RdRzabj3VAkVa58rII23F5apBme7+3RGmrPTwSq9OmXNAdfh89FSREDi/fW6jt3LXxViBVrnyug1/826/8NgsmGnGJJ1qDHUjpBefILV7C7W/Nbs+O+yHbXsWI3DA+owtxMOf4mXIB0JaXN8N7zWjX4jmOOHiNcx7eIOBEdWnJauHOa0qzxu9uZ8+MLYfydwm1bS+qXf5TSPBsPIPmS7+1a2e0nIyvffJnDd9banHKnAHUzi/b3UuW/hcw7bfREWNcIouI4zfGen3yQcy4nO0Gep0CwDi7hsP4vt49cuqpECG5nXXqg8D83cUM2KmmovfhtqzoIcHlx60x1cPFa0+BttOD2hs75gPxBhu5txP8uPVwPVoW3PmNsAd2fjF3da5/QsFYv1YFpr4NwsTF7R2ZuECaMfDe+NGMe0vJ8BFupAVks9qFnl+knEEQM/ybo0gWdn62QtgVa+11GtquellWmjQRd2XqhBJluSrX1WPsjnU2CCuIPDn6ICAIOf5F0c2m46XQCRVr7WQRtuL7pBme7+3RGmrPTwSq9OmXNBn9Rv4EU+gOaII91VgjXQIOaPbTcZo1siTmgjRTcoWyatM/RGmqxQug06fdAfvZaK1Wp1yUfu5aq02q1zQRm7nqoGwatM/VVm9xaKB0mnTL0QMRtWWUEHzXnu1vhzA2vDaMXDa7dEEyHNkA7rxvNXonGnJceJgxdpj9Jy8ouPcclXnjbqxPHLXitTbd8sXMJOFjOpvZzST6sLZ/tXpvl18Mu2M4r3YoxDihopDC2ihz9S41cZ8Ml604kcQp68J6Oy8jB5LC4xBGrQOpl0/suYZ526t8O3HHW5HaFcJDvED/AH9SP2VDnat9D+yyGINbdYVqtwPwHnVo6y77K4ezAXcZPoPT7yucuA1CxDicrDx8egXRyEr59o2hjLuNzkBdx6BY4r3ZDdnXMnoFNn2UNNRu4+N489Tz8lwec+N+y9o2vZHYbMQYRe5opIncvUHOHeI8LZi8yuu+EvhbD2Fkg1PiXP1c6LT4DQNE56kyvW9tY4bhEG7jFIGdUiI81ls2yyanxIO60ZN583c9NNSaeXHLKzV8LMMsZLvt9NEGTkj21XHRRriTSclXupsOquVq91VhmjXUiDmjmhtxmjW1CTmgjG03PRKZNQy+yNNVioSQaRl90GTjVlolVqdclHCnJWm1WuaDD6TlVPquVQVrabnpZCKt4ZfZGkniy9EJIMDL81QHOqsPdUGBTrlyujhHDn6oAIk8X76WQRopz18EpvVpnzRt+Ly0STMd39uqA7ey08VZkU65crKOtw+eqpAiRxfvrZBGmmx18EDabnL7qtE8X2WLSSYOX5F0Fc2q46XXzv2cG7JBAMDu3I9Ml9DiRw5et1XAC7c/Vc0bYYG0SaXCl3gdeY8fJfSuCgOG8AeR9jHjzXEA8cLvJ+XQOzHnUpD6QxvgPRZlfMNqjjaW8829ahkP5oXPhvBEggg6gyPVcAMAvr46rjxsUNEm5yAGZOgCYuKG53JyAzJ8APwDVceGySXOz08GjUDx0k6oODD2TeGK+C7QZtZ/L4nn/wB5+pwquNPFQEzHd/bS6rrcP3QUmRTr7WRrqbHrZHAASM/ybI0A8WfpZBGtpuUc2q4UaSbOy9EJIMNy9UGTnVWHW6AwKdfa6OAHDn62QAESc/yLII0U56+CUXq0z5o2/F5aJJmO7+3VBl9ceBRKG8vVVBgTVbLVA6nd/LrLEEC1lMMSJOaCBtN89Eid7zjp/wAJhXzuh4o0kWQOLlCVd3ylXEtlZI3Z1jNBBuc5SmN7zjqmFeZuo3ijSSgpFV8oQuq3fyyYtsrK4ggSM0EBptnqgZTfNXCEi91MMyYN0Atq3kJqtlqo8wYGSyxRAtZADo3ffquJ+AwGXNBJ1Ah3mRdcoG7Ot7qYd87oMWYIbdoA1NrmPE6rI7/KEnejSUxLRFpQKp3fKeiA02zlZEbs6xmph3zuggbG9+XQtqvlojDJg5XTEMGBayCl1VskDqbZpiCBIsmGJEm6CBtN89Epne/LJhmc7qOMOjS1kF4uUJX3fKVcS2VlQN2dYzQYfQPiqsPqHxRB/9k='
                     alt="" />
                </ProfileImageContainer>
                    <NameWrapper>
                        <h2> {FullName} </h2>
                       
                    </NameWrapper>
                <AddressContainer>
                    <h3>Address</h3>
                    <Contents> <span>  <FmdGoodOutlinedIcon/> </span> {Address} </Contents>
                    <Contents> <span> <CallOutlinedIcon/> </span> {PhoneNo} </Contents>
                </AddressContainer>        
                <AddressContainer>
                    <h3>Skills</h3>
                    <Contents> <span> </span> {Skill1} {Skill2} </Contents>
                   
                </AddressContainer>        
                <AddressContainer>
                    <h3>Social Links</h3>
                    <Contents> <span> </span> {Social} </Contents>
                    <Contents> <span> </span> {Social1}</Contents>
                </AddressContainer>        
            </LeftContainer>
            <RightContainer>

                <MainContent>
                </MainContent>
                <MainContent>
                    <h3>Education Details</h3>               
                    <Details>
                        {CollageName} ( {From} - {To})
                        <span> B.tech  </span>
                        <p> Percentage : <span style={{marginLeft:10}}>{Persentage} % </span>   </p>
                    </Details>
        
                </MainContent>
                <MainContent>
                    <h3>Projects</h3>               
                    <Details>
                        {ProjectName}
                        <p>Technology Used : <span style={{marginLeft:10}}> {Tach_Stake_Used} </span> </p>
                        <span> </span>
                        <p> Descriptions : </p>
                        <span>  {Describe}  </span>
                 </Details>
                </MainContent>   
            </RightContainer>
        </Wrapper>
        <button onClick={save}>Download Resume</button>
    </Container>
    </div>
    </>
  )
}

export default Resume