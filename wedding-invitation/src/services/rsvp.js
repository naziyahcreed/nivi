/**
 * RSVP integration layer — point apiEndpoint in weddingData.rsvp to your backend.
 */
export async function submitRsvp(apiEndpoint, payload) {
  if (!apiEndpoint) {
    await new Promise((resolve) => setTimeout(resolve, 600))
    return { ok: true, mock: true }
  }

  const response = await fetch(apiEndpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  })

  if (!response.ok) {
    throw new Error(`RSVP request failed (${response.status})`)
  }

  return response.json()
}
