export default {
  setPersonal(context, payload) {
    context.commit('setPersonal', payload)
  },
  setCondition(context, payload) {
    context.commit('setCondition', payload)
  },
  setVaccinated(context, payload) {
    context.commit('setVaccinated', payload)
  },
  setPolicy(context, payload) {
    context.commit('setPolicy', payload)
  },
  async sendAnswers(context) {
    const personal = context.rootGetters['covid/personal']
    const condition = context.rootGetters['covid/condition']
    const vaccinated = context.rootGetters['covid/vaccinated']
    const policy = context.rootGetters['covid/policy']
    const { firstname, lastname, email } = personal
    const { hadCovid, hadTest, sicknessDate, testDate, antibodyNumber } = condition
    const { hadVaccine, vaccinatedStage, waitingStage } = vaccinated
    const { meetings, officeDays, meetingsLive, aboutUs } = policy
    const reverseSicknessDate = sicknessDate?.split('/').reverse().join('/')
    const reverseTestDate = testDate?.split('/').reverse().join('/')
    const covidData = {
      first_name: firstname,
      last_name: lastname,
      email: email,
      had_covid: hadCovid,
      had_vaccine: hadVaccine === 'true',
      non_formal_meetings: meetings,
      number_of_days_from_office: +officeDays,
      what_about_meetings_in_live: meetingsLive,
      tell_us_your_opinion_about_us: aboutUs,
    }

    if (hadCovid === 'yes' && hadTest === 'true') {
      covidData.had_antibody_test = hadTest === 'true'
      covidData.antibodies = {
        test_date: reverseTestDate,
        number: +antibodyNumber,
      }
    } else if (hadCovid === 'yes' && hadTest === 'false') {
      covidData.had_antibody_test = hadTest === 'true'
      covidData.covid_sickness_date = reverseSicknessDate
    }

    if (hadVaccine === 'true') {
      covidData.vaccination_stage = vaccinatedStage
    } else {
      covidData.i_am_waiting = waitingStage
    }

    const response = await fetch(
      `https://covid19.devtest.ge/api/create
`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          accept: 'application/json',
        },
        body: JSON.stringify(covidData),
      },
    )

    if (!response.ok) {
      throw new Error('Cannot sand Data')
    }

    context.commit('sendAnswers')
  },
}
