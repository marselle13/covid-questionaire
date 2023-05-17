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
    const covidData = {
      first_name: firstname,
      last_name: lastname,
      email: email,
      had_covid: hadCovid,
      had_antibody_test: hadTest === 'true',
      covid_sickness_date: sicknessDate,
      antibodies: {
        test_date: testDate,
        number: +antibodyNumber,
      },
      had_vaccine: hadVaccine === 'true',
      vaccinated_stage: vaccinatedStage,
      i_am_waiting: waitingStage,
      non_formal_meetings: meetings,
      number_of_days_from_office: +officeDays,
      what_about_meetings_in_live: meetingsLive,
      tell_us_your_opinion_about_us: aboutUs,
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

    const responseData = await response

    if (!response.ok) {
      throw new Error(responseData.message || 'cannot sand data')
    }

    context.commit('sendAnswers')
  },
}
